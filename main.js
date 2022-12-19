// toggle start button color
const start_button = document.getElementById("start");
const timer_button = document.getElementById("timer");

// global minute and second variables
var int_minutes = 05;
var int_seconds = 00;
var total_time = (int_minutes * 60) + int_seconds;
var original_time = total_time;

// flag to determine timer state
var isRunning = false;

var timer = null;

start_button.addEventListener('click', function onClick(event) {
    
    if (start_button.style.backgroundColor === "rgb(107, 189, 153)") {

        // change button display
        event.target.style.backgroundColor = "#FF5436";
        start_button.innerText = "close";

        timer = setInterval(function() {
            if (total_time <= 0) {
                clearInterval(timer);
                document.getElementById("time").innerHTML = "Finish!";

                // reset total_time to original time
                total_time = original_time;

                // change button to reset icon
                event.target.style.backgroundColor = "#F1C40F";
                start_button.innerText = "device_reset";
            }

            else {
                document.getElementById("time").innerText = (int_minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
                    + ":" + (int_seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            }

            total_time--;

            // calculate remaining time from total_time
            int_minutes = Math.floor(total_time / 60);
            int_seconds = total_time - int_minutes * 60;

        }, 1000);

    }

    else {
        event.target.style.backgroundColor = "#6BBD99";
        start_button.innerText = "play_arrow";

        clearInterval(timer);
        document.getElementById("time").innerText = (int_minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
            + ":" + (int_seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
});

// Adjust time on timer button click
timer_button.addEventListener('click', function onClick(event) {

    // set variable to time display
    const display = document.getElementById("time");
    
    // prompt user to change time
    var minutes = prompt("Please enter the starting amount of minutes: ", "0");

    // Set default time to 10 minutes if incorrect user input
    if (isNaN(minutes) || minutes < 1) {
        minutes = 10;
    }

    int_minutes = parseInt(minutes);
    int_seconds = 00;

    // convert minutes to seconds
    total_time = (int_minutes * 60);
    original_time = total_time;

    // display new time (toLocaleString ensures 2 digits displayed in seconds spot)
    display.innerText = (int_minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":"
     + (int_seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
})