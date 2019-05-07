const FS = require("fs");
const CHALK = require("chalk");
const YARGS = require("yargs");

const notes = require("./notes");

// FS.writeFileSync("notes.txt", "My name is Gregg, and I like me.");
// FS.appendFileSync("notes.txt", " I live in Texas.");

// console.log(notes());

// console.log(CHALK.blue.bold("Gregg"));
// console.log(CHALK.blue.inverse("Gregg"));
// console.log(CHALK.green.bold("Gregg"));
// console.log(CHALK.green("Gregg"));
// console.log(CHALK.green.inverse("Gregg"));

// console.log("argv[0] - path to node:", process.argv[0]);
// console.log("argv[1] - path to file being called:", process.argv[1]);
// console.log("argv[0] - arguments passed in:", process.argv[2]);

// customize yargs version
YARGS.version("1.1.16");

// ADD
YARGS.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        console.log(CHALK.green("Adding a new note: "), argv.title);
        console.log(CHALK.yellow("Body: "), argv.body);
    }
});
// REMOVE
YARGS.command({
    command: "remove",
    describe: "Remove a note",
    handler: () => {
        console.log("Removing the note");
    }
});
// READ
YARGS.command({
    command: "read",
    describe: "Read a note",
    handler: () => {
        console.log("Read the note");
    }
});
// LIST
YARGS.command({
    command: "list",
    describe: "List notes",
    handler: () => {
        console.log("Listing notes");
    }
});

console.log("NORMAL: ", process.argv);
console.log("YARGS: ", YARGS.argv);
