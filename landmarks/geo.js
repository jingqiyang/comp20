var myLat = -99, myLng = -99, me;

//options for loading map
var myOptions =
{
    zoom: 13,
    center: me,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map, infoWindow = new google.maps.InfoWindow();

function init()
{
    map = new google.maps.Map(document.getElementById("canvas"), myOptions);
    getMyLocation();
}

function getMyLocation()
{
    if (navigator.geolocation) // the navigator.geolocation object is supported on your browser
    {
        navigator.geolocation.getCurrentPosition(function(position)
        {
            myLat = position.coords.latitude;
            myLng = position.coords.longitude;
            ajax();
        });
    }
    else
        alert("Geolocation is not supported by your web browser.  Sorry!");
}

function ajax()
{
    //make instance of XMLHttpRequest
    var request = new XMLHttpRequest();

    //set up http request
    request.open("POST", "https://defense-in-derpth.herokuapp.com/sendLocation", true);

    //add parameter to http request header
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //set up callback on what to do when response is received
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            var rawData = request.responseText;
            locations = JSON.parse(rawData);
            //console.log(locations);
            renderMap();
        }
    }
    
    //fire off request
    var parameters = "login=7QNJ31fE" + "&" +
                     "lat=" + myLat + "&" +
                     "lng=" + myLng;
    request.send(parameters);
}

function renderMap()
{
    me = new google.maps.LatLng(myLat, myLng);
    
    // Update map and go to my location
    map.panTo(me);
    
    //markers icons
    var meIcon = "me-emoji.png", friendIcon = "friend-emoji", landmarkIcon = "landmark-emoji.png";
    
    //create user marker
    myMarker = new google.maps.Marker({
        position: me,
        map: map,
        title: "Me!",
        icon: meIcon
    });
    
    //user marker info window
    google.maps.event.addListener(myMarker, 'click', function() {
        infoWindow.setContent(myMarker.title);
        infoWindow.open(map, myMarker);
    });
    
    //console.log(locations);
    
    /*
     console.log((locations["people"]).length);
     //create friend markers
     for (i = 0; i < locations["people"].length; i++)
     {
         friend = {lat: (locations["people"])[i][2], lng: (locations["people"])[i][3]};
     
             friendMarker = new google.maps.Marker({
                 position: friend,
                 map: map,
                 title: "Me!",
                 icon: meIcon
             });
     }
     */
}
