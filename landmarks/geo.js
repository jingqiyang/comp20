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
            renderMap();
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
            var locations = JSON.parse(rawData);
            //console.log(locations);
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
    
    // Create a marker
    myMarker = new google.maps.Marker({position: me, title: "Me!"});
    myMarker.setMap(map);
    
    // Open info window on click of marker
    google.maps.event.addListener(myMarker, 'click', function() {
        infoWindow.setContent(myMarker.title);
        infoWindow.open(map, myMarker);
    });
}
