const fs = require("fs/promises");

async function fileCleaner() {
    const content = await fs.readFile("./1-file-cleaner.txt")
    await fs.writeFile("./1-file-cleaner.txt", content.toString().replace(/\s+/g, " "))
}

fileCleaner()