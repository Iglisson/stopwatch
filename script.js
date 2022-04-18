'use strict';

let second = 0;
let minute = 0;
let hour = 0;
let time = 0;
let init = false;

const btnStop = window.document.querySelector("#btn-stop");
const btnStart = document.querySelector("#btn-start");
const btnReset = window.document.querySelector("#btn-reset");

const stopwatch = () => {
    if (init) {
        time = window.setInterval(() => {
            if (second == 60) { minute++; second = 0; }
            if (minute == 60) { hour++; minute = 0; }
            second++;
            update();
        }, 1000);
    }
}

const update = () => {
    window.document.querySelector("#second").innerHTML = `${second < 10 ? 0 : ''}${second}`;
    window.document.querySelector("#minute").innerHTML = `${minute < 10 ? 0 : ''}${minute}`;
    window.document.querySelector("#hour").innerHTML = `${hour < 10 ? 0 : ''}${hour}`;

    btnReset.disabled = (second == 0 && minute==0 && hour == 0) ? true : false;
}

btnStop.addEventListener("click",  () => {
    window.clearInterval(time);
    btnStop.disabled = true;
    btnStart.disabled = false;
});

btnStart.addEventListener("click", () => {
    init = true;

    stopwatch();

    btnStop.disabled = false;
    btnStart.disabled = true;
    btnReset.disabled = false;
});

btnReset.addEventListener("click", () => {
    second = 0;
    minute = 0;
    hour = 0;

    update();    
});

window.onload = stopwatch;