"use strict";

const fsP = require("fs/promises");

async function cat(path) {
  try {
    const contents = await fsP.readFile(path, 'utf8')
    console.log(contents);
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1)
  }
}

cat(process.argv[2])
