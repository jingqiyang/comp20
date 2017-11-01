$(document).ready(function()
{
    $("#msg").change(function()
    {
        //store new entry in local storage
        var date = new Date();
        var key = date.getTime();
        var month = date.getMonth() + 1;
        var value = "<p>" + date.getHours() + ":" +
                    date.getMinutes() + " " +
                    month + "/" +
                    date.getDate() + "/" +
                    date.getFullYear() + " - " +
                    $("#msg").val() + "</p>";
        console.log(value);
        localStorage.setItem(key, value);
                    
        //load all logs
        
    });
});
