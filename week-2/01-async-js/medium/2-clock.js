const clock = new Date();

hours = 15;
minute = 16;
seconds = 58;

function terminalClock() {

    console.log(`${hours}:${minute}:${seconds}`)

    if (seconds >= 60) {
        seconds = 0;
        minute++;
    } else if (minute >= 60) {
        minute = 0;
        hours++;
    }


}

setInterval(() => {
    seconds++
    terminalClock()
}, 1000)