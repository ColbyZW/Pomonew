const button = document.querySelector("#timer_start");
const timerText = document.querySelector("#timer_text");
const counter = document.querySelector('#intervals');
const timerTextChange = document.querySelector("#timer_button_text")
let timeRunning;
let stopped = true;
let time = 1500000;
let pomoCounter = 0;
let breakTime = false;

//Function calls the timing function to start when the start button is clicked
button.addEventListener('click', () => {
    if (stopped) {
        timingFunction()
        timerTextChange.innerHTML = "Stop Timer"
        stopped = false;
    } else {
        stopTimer()
        timerTextChange.innerHTML = "Start Focusing"
        stopped = true;
    }
})
//25 mins in milliseconds is 1500000
//This function handles all of the logic behind the timer
const countdown = () => {
    time -= 1000
    minutes = Math.floor((time / 1000) / 60)
    seconds = Math.floor((time / 1000) % 60)
    if (time <= 0 && breakTime == false) {
        pomoCounter += 1
        counter.innerHTML = `${pomoCounter}`
        stopTimer()
        stopped = true
        //Checks if this is the 4th Pomodoro, if so it sets the break time to 15 minutes
        if (pomoCounter % 4 == 0) {
            timerText.innerHTML = `15:00`
            time = (15 * 1000 * 60)
            breakTime = true
        } else {
            timerText.innerHTML = `05:00`
            time = (5 * 1000 * 60)
            breakTime = true
        }
    } else if (time <= 0 && breakTime == true) {
        stopTimer()
        timerText.innerHTML = `25:00`
        stopped = true
        breakTime = false
    } else {
        if (seconds < 10 && minutes < 10) {
            timerText.innerHTML = `0${minutes}:0${seconds}`
        } else if (seconds < 10) {
            timerText.innerHTML = `${minutes}:0${seconds}`
        } else if (minutes < 10) {
            timerText.innerHTML = `0${minutes}:${seconds}`
        } else {
            timerText.innerHTML = `${minutes}:${seconds}`
        }
    }
}
//This function starts an interval callback, calling the countdown function every 1 second
const timingFunction = (time) => {
    timeRunning = setInterval(countdown, 1000)
}
//This function clears the interval and stops the timer
const stopTimer = () => {
    console.log("Stopping Time!")
    clearInterval(timeRunning)
}

const play = () => {
    var audio = document.getElementById('audio1');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0
    }
}


