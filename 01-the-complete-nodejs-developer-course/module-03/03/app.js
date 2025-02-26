// const fs = require("fs");

// const name = process.argv[2];

// fs.writeFileSync("notes.txt", "My name is " + name + ".");
// const city = process.argv[3];

// fs.appendFileSync("notes.txt", " I live in " + city + ".");
// const utils = require("./utils.js");

// console.log(utils.add(5, 4));
const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");

// console.log(getNotes());

const emails = {
  email1: "jogaocarlos.com",
  email2: "igorluiz@mundo.com",
};

for (let i = 1; i <= 2; i++) {
  const email = emails[`email${i}`];
  const isAValidEmail = validator.isEmail(email)
    ? chalk.white.inverse.bold(`o email ${email} é válido`)
    : chalk.black.inverse.bold(`o email ${email} é inválido`);
  console.log(isAValidEmail);
}
