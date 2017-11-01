$(document).ready(function()
{
    $("#msg").change(function()
    {
        store();    //store in local storage
        load();      //load all logs
    });
});

//store new entry in local storage
function store()
{
    var date = new Date();
    var key = date.getTime();
    
    var month = date.getMonth() + 1;
    var value = "<p>" + date.getHours() + ":" +
    date.getMinutes() + " " +
    month + "/" +
    date.getDate() + "/" +
    date.getFullYear() + " - " +
    $("#msg").val() + "</p>";
    
    localStorage.setItem(key, value);
}

//load logs in reverse chronological order
function load()
{
    
}
