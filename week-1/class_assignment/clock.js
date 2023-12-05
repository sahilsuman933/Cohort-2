function terminalClock() {
    const clock = new Date();

    hours = clock.getHours();
    minute = clock.getMinutes();
    seconds = clock.getSeconds();

    console.log(`${hours}:${minute}:${seconds}`)
}

setInterval(terminalClock, 1000)