"use strict";

const fsP = require("fs/promises");


/** takes in a file path and returns its contents
 * or catches error
 */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, 'utf8')
    console.log(contents);
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1)
  }
}

/**takes in a url, sends a get request to that url and returns contents
 * catches errors if url is invalid
 */
async function webCat(url) {
  try {
    const response = await fetch(url)
    const data = await response.text()
    console.log(data);
  } catch (error) {
    console.log(`${error.name}:`, error.message);
    process.exit(1)
  }
}

/** invokes cat if arg is path, webCat if url */
if (URL.canParse(process.argv[2])) {
  webCat(process.argv[2])
} else {
  cat(process.argv[2])
}
