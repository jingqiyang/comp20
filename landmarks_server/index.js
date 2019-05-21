var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

var bodyParser = require('body-parser'); // Required if we need to use HTTP post parameters
var validator = require('validator'); // See documentation at https://github.com/chriso/validator.js
var app = express();
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true }));

// Mongo initialization and connect to database
// process.env.MONGOLAB_URI is the environment variable on Heroku for the MongoLab add-on
// process.env.MONGOHQ_URL is the environment variable on Heroku for the MongoHQ add-on
// If environment variables not found, fall back to mongodb://localhost/nodemongoexample
// nodemongoexample is the name of the database
var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/nodemongoexample';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});


app.set('port', (process.env.PORT || 5000));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.set('Content-Type', 'text/html');
	var indexPage = '';
	indexPage += "<!DOCTYPE HTML><html><head><title>Assignment 3</title></head><body><h1>CHECKOUT these CHECKINS ;)</h1>";
	var currLogin, currLat, currLng, currTimeStamp;
	db.collection('checkins', function(er, collection) {
		collection.find().toArray(function(err, checkins) {
			if (!err) {
				checkins.reverse();
				for (var i = 0; i < checkins.length; ++i) {
					currLogin = checkins[i].login;
					currLat = checkins[i].lat;
					currLng = checkins[i].lng;
					currTimeStamp = checkins[i].created_at;

					indexPage += ("<p>" + currLogin + " checked in at " + currLat + ", " + currLng + " on " + currTimeStamp + "</p>" );
				}
				response.send(indexPage);
			} else {
				response.send('Whoops, something went terribly wrong!');
			}
		});
	});
});

app.get('/checkins.json', function(request, response) {
	if (request.param('login')) {
		var returnData;
		var login = request.param('login');
		db.collection('checkins', function(er, collection) {
			collection.find({ "login": login }).toArray(function(err, checkins) {
				if (!err) {
					response.send(checkins);
				} else {
					response.send('Whoops, something went terribly wrong!');
				}
			});
		});
	} else {
		returnData = [];
		response.send(returnData);
	}
});

app.get('/cool', function(request, response) {
    response.send(cool());
});

// Handle sendLocation
app.post('/sendLocation', function(request, response) {
    if (request.body.login && request.body.lat && request.body.lng) {
	    var login = request.body.login;
	    var lat = request.body.lat;
	    var lng = request.body.lng;
	    var date = new Date();

	    var toInsert = {
	    	"login": login,
	    	"lat": parseFloat(lat),
	    	"lng": parseFloat(lng),
	    	"created_at": date.toString()
	    }

		db.collection('checkins', function(error, coll) {
			coll.insert(toInsert, function(error, saved) {
				if (error) {
					console.log("Error: " + error);
					response.send(500);
				}
		    });
	    });
		// Line 50: equivalent to `db.fooditems` in MongoDB client shell
		db.collection('landmarks', function(er, collection) {

			// Line 53: equivalent to `db.fooditems.find()` in MongoDB client shell
			collection.find().toArray(function(err, landmarks) {

				// All results of db.fooditems.find() will go into...
				// ...`results`.  `results` will be an array (or list)
				if (!err) {
					db.collection('checkins', function(er, collection) {

						// Line 53: equivalent to `db.fooditems.find()` in MongoDB client shell
						collection.find().toArray(function(err, checkins) {

							// All results of db.fooditems.find() will go into...
							// ...`results`.  `results` will be an array (or list)
							if (!err) {
								var returnData;
								if (checkins.length > 100) {
									checkins.reverse();
									returnData = {"people": checkins.splice(100), "landmarks": landmarks};
								} else {
									returnData = {"people": checkins, "landmarks": landmarks};
								}

								response.send(returnData);
							} else {
								response.send('Whoops, something went terribly wrong!');
							}
						});
				    });
				} else {
					response.send('Whoops, something went terribly wrong!');
				}
			});
	    });
        
//    var returnData = {"people":[], "landmarks":[]};
//    response.send(returnData);
    } else {
        var error = {"error":"Whoops, something is wrong with your data!"};
        response.send(error);
    }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
