$(document).ready(function()
{
    $("#msg").change(function()
    {
        var logs = getMessage();    //create list with new msg
        store(logs);    //store logs as string in local storage
        load(); //parse string in local storage & update html
    });
});

//create list of messages
function getMessage()
{
    var date = new Date();
    //var time = date.getTime();
    
    var month = date.getMonth() + 1;
    
    //store new msg in string
    var msg = "<p>" + date.getHours() + ":" +
    date.getMinutes() + " " +
    month + "/" +
    date.getDate() + "/" +
    date.getFullYear() + " - " +
    $("#msg").val() + "</p>";
    
    var logs = [msg];  //create list with new msg
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

    //store as json string
    localStorage.setItem("logs", JSON.stringify(logs));
}

//load all logs
function load()
{
    //all logs
    var logs = JSON.parse(localStorage.getItem("logs"));
    
    for (i = 0; i < logs.length; ++i)
        $("#log").append(logs[i]);
}
