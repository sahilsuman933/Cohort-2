function timer() {
    const startTime = new Date();

    setTimeout(function sayHello() {
        console.log("Hello Sahil!")
    }, 1000);

    const endTime = new Date() - startTime;
    console.log("End Time:" + endTime)
}

timer()

