function timer() {
    const startTime = new Date();

    setTimeout(function sayHello() {
        const endTime = new Date() - startTime;
        console.log("Hello Sahil!")
        console.log("End Time:" + endTime);
    }, 1000);
}

timer()
