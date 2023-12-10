const fs = require("fs");

async function writeToFile() {
    const writeToFile = await fs.promises.appendFile("./dummy.txt", "\nWriting to file");
    console.log("Hello Sahil")
}

writeToFile()