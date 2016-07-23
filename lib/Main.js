"use strict";
var CommandParser = require('./commands/CommandParser');
var Grid = require('./model/Grid');
var Robot = require('./model/Robot');
var commandParser = new CommandParser();
var pieces = [new Robot()];
var grid = new Grid(5, 5, pieces);
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Enter instructions for the robot...');
rl.prompt();
rl.on('line', function (input) {
    var command = commandParser.parse(input);
    if (command === null) {
        console.log("Instruction: " + input + " did not make sense. Ignoring...");
    }
    else {
        grid.update(command);
    }
});
