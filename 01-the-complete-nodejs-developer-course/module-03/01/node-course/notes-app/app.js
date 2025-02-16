const chalk = require("chalk");
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);

console.log(chalk.bold.inverse.rgb(255, 0, 0)("Error!"));
