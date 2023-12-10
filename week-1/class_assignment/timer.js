function timer() {
    const startTime = new Date();

    setTimeout(function sayHello() {
        console.log("Hello Sahil!")
<<<<<<< HEAD

        const endTime = new Date() - startTime;
        console.log("End Time:" + endTime);
    }, 3000);

    
=======
        const endTime = new Date() - startTime;
        console.log("End Time:" + endTime)
    }, 1000);

>>>>>>> 4b50f8a (completed week-2 assignment)
}

timer()
