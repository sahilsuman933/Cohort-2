/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleepUsingPromsie(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds);
    })
}

async function sleep(seconds) {
    console.log("Sleeping...")
    await sleepUsingPromsie(seconds)
    console.log("Just woke up now!")
}

sleep(3000)