let counter = 1

function printCounter() {
    console.log(counter)
    startCounter()
}

function startCounter() {
    setTimeout(() => {
        printCounter()
        counter++;
    }, 1000)
}

startCounter()