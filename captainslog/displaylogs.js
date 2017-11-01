$(document).ready(function()
{
    $("#msg").change(function()
    {
        var logs = getMessage();
        store(logs);
        load();
    });
});

//store message in string
function getMessage()
{
    var date = new Date();
    //var time = date.getTime();
    
    var month = date.getMonth() + 1;
    var msg = "<p>" + date.getHours() + ":" +
    date.getMinutes() + " " +
    month + "/" +
    date.getDate() + "/" +
    date.getFullYear() + " - " +
    $("#msg").val() + "</p>";
    
    var logs = [msg];  //add new msg to front of list
    return logs;
}

//store new entry in local storage
function store(logs)
{
    //previous logs
    var prevLogs = JSON.parse(localStorage.getItem("logs"));
    
    if (prevLogs)   //if not null
    {
        for (var i = 0; i < prevLogs.length; ++i)
            logs.push(prevLogs[i]);
    }

    localStorage.setItem("logs", JSON.stringify(logs));
}

function load()
{
    $("#log").html(localStorage.getItem("logs"));
}
