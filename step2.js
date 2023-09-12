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

async function webCat(url) {
  try {
    const response = await fetch(url)
    console.log(response.status);
    const data = await response.text()
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1)
  }
}


if (URL.canParse(process.argv[2])) {
  webCat(process.argv[2])
} else {
  cat(process.argv[2])
}
