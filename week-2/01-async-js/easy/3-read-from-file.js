const fs = require("fs");


async function readFileWithAwait() {

    const content = await fs.promises.readFile("./dummy.txt")
    console.log(content.toString())

    console.log("This will not read first as I added await keyword. Which means that when reading process is done then this line will be executed.")
}


readFileWithAwait()
