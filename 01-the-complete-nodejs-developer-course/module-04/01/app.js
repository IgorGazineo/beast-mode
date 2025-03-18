const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function ({ title, body }) {
    if (!title) {
      console.log("Insert a valid title.");
    } else if (!body) {
      console.log("Insert a valid body.");
    } else {
      console.log(`${title} is a valid title`);
      console.log(`${body} is a valid body`);
    }
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

yargs.command({
  command: "list",
  describe: "Listing out your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
// console.log(yargs.argv);
