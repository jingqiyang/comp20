$(document).ready(function()
{
    $("#msg").change(function() {
        key = new Date().getTime();
        localStorage.setItem(key, $("#msg").val());
    });
});
