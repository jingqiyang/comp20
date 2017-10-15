var myLat = 0, myLng = 0, me;

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
            renderMap();
        });
    }
    else
        alert("Geolocation is not supported by your web browser.  Sorry!");
}

function renderMap()
{
    me = new google.maps.LatLng(myLat, myLng);
    
    // Update map and go to my location
    map.panTo(me);
    
    // Create a marker
    marker = new google.maps.Marker({position: me, title: "Me!"});
    marker.setMap(map);
    
    // Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });
}

var request = new XMLHttpRequest(); //make instance of XMLHttpRequest
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

request.open("GET", "https://defense-in-derpth.herokuapp.com/sendLocation", true);

request.onreadystatechange = function()
{
    if (request.readyState == 4 && request.status == 200)
    {
        var rawData = request.responseText;
        var locations = JSON.parse(rawData);
    }
}

request.send("login=7QNJ31fE&lat=myLat&lng=myLng");
