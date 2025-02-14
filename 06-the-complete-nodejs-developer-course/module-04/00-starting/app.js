const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

const blueMsg = chalk.blue.inverse.bold("Success!");
console.log(blueMsg);
