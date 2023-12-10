/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promisifiedSetTimeout(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}

function wait(n) {
    promisifiedSetTimeout(n).then(() => {
        console.log("Hello from PromisifiedSetTimeout Function!")
    })
}

wait(1000)