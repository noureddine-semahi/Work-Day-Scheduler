//Defining my variables
var hour8 = $("#one")
var hour9 = $("#two");
var hour10 = $("#three");
var hour11 = $("#four");
var hour12 = $("#five");
var hour1 = $("#six");
var hour2 = $("#seven");
var hour3 = $("#eight");
var hour4 = $("#nine");
var hour5 = $("#ten");
var hour6 = $("#eleven");
var hour7 = $("#twelve");
var actualTime = moment();
var now = new moment();
var saveBtn = $(".saveBtn");
var deleteBtn = $(".deleteBtn");

//Running my functions
function scheduler() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $("#currentTime").text(new moment().format("HH:MM:ss"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

scheduler();
$(document).ready(function() {
    setInterval(scheduler, 1000);
});

saveBtn.on("click", function () {
    var actualTime = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(actualTime, schedule);
});

deleteBtn.on("click", function () {
    var actualTime = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.removetem(actualTime, schedule);
});

function pastPresentFuture() {
    hour = actualTime.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
event.preventDefault();
pastPresentFuture();