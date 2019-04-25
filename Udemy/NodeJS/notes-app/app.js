const FS = require("fs");
const CHALK = require("chalk");

const notes = require("./notes");

FS.writeFileSync("notes.txt", "My name is Gregg, and I like me.");
FS.appendFileSync("notes.txt", " I live in Texas.");

console.log(notes());

console.log(CHALK.blue.bold("Gregg"));
console.log(CHALK.blue.inverse("Gregg"));
console.log(CHALK.green.bold("Gregg"));
console.log(CHALK.green("Gregg"));
console.log(CHALK.green.inverse("Gregg"));
