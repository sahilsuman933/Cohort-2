function timer() {
    const startTime = new Date();

    setTimeout(function sayHello() {
        console.log("Hello Sahil!")

        const endTime = new Date() - startTime;
        console.log("End Time:" + endTime);
    }, 3000);

    
}

timer()
