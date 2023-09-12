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

cat(process.argv[2])
