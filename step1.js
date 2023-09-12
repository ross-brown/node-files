"use strict";

const fsP = require("fs/promises");

/** takes in a file path and returns its contents
 * or catches error
 */
async function cat(path) {
  try {
    var contents = await fsP.readFile(path, 'utf8')

    //move consolelog outside of try catch, limit what we have in try block
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1)
  }
  console.log(contents);
}

cat(process.argv[2])
