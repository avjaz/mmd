"use strict";
const CommandParser = require('./commands/CommandParser');
const Grid = require('./model/Grid');
const Robot = require('./model/Robot');
const GridManager = require("./GridManager");
var commandParser = new CommandParser();
var pieces = [new Robot()];
var gridManager = new GridManager(new Grid(5, 5), pieces);
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Enter instructions for the robot...');
rl.prompt();
rl.on('line', (input) => {
    var command = commandParser.parse(input);
    if (command === null) {
        console.log(`Instruction: ${input} did not make sense. Ignoring...`);
    }
    else {
        gridManager.update(command);
    }
});
