const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");

// const emails = {
//   email1: "jogaocarlos.com",
//   email2: "igorluiz@mundo.com",
// };

const emails = ["jogaocarlos.com", "igorluiz@mundo.com", "carla@manual"];

for (let i = 0; i < emails.length; i++) {
  const isEmailValed = validator.isEmail(emails[i]);
  let finalMessage = "";
  const emailMessage = `O email ${chalk.underline(emails[i])} é ${
    validator.isEmail(emails[i]) ? "válido" : "inválido"
  }.`;

  if (isEmailValed) {
    finalMessage = chalk.bgWhite.bold(emailMessage);
  } else {
    finalMessage = chalk.bgRed.bold(emailMessage);
  }
  console.log(finalMessage);
}

console.log(getNotes());
