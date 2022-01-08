let sec = 00;
let tens = 00;
let minute = 00;



const minutes = document.querySelector(".min");
const dsec = document.querySelector(".sec");
const dtens = document.querySelector(".tens");
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const clearButton = document.getElementById("clearBtn");
let interval;



function startTimer() {
    tens++;
    if (tens < 9) {
        dtens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        dtens.innerHTML = tens;
    }
    if (tens > 99) {
        sec++;
        dsec.innerHTML = "0" + sec;
        tens = 0;
        dtens.innerHTML = "0" + 0;

    }
    if (sec > 9) {
        dsec.innerHTML = sec;
    }
    if (sec > 60) {
        minute++;
        sec = 0;
        dsec.innerHTML = "0" + 0;


    }
    if (minute < 60) {
        minutes.innerHTML = "0" + minute;
    }
    if (sec > 60) {
        minute++;
        minutes.innerHTML = minute;
    }


}


startButton.onclick = function () {

    interval = setInterval(startTimer, 10)
    startButton.disabled = true;
    stopButton.disabled = false;
    clearButton.disabled = false;



}

stopButton.onclick = function () {
    clearInterval(interval);
    stopButton.disabled = true;
    startButton.disabled = false;
}
clearButton.onclick = function () {
    clearInterval(interval);
    tens = "00"
    sec = "00"
    minute = "00"
    dsec.innerHTML = sec;
    dtens.innerHTML = tens;
    minutes.innerHTML = minute;

    clearButton.disabled = true;
    startButton.disabled = false;
    stopButton.disabled = true;

}