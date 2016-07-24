///<reference path="../typings/index.d.ts" />
import Command = require('./commands/Command');
import CommandParser = require('./commands/CommandParser');
import Grid = require('./model/Grid');
import Piece = require('./model/Piece');
import Robot = require('./model/Robot');
import GridManager = require("./GridManager");

var commandParser: CommandParser = new CommandParser();
var pieces: Piece[] = [new Robot()];
var gridManager: GridManager = new GridManager(new Grid(5, 5), pieces);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter instructions for the robot...');

rl.prompt();

rl.on('line', (input: string) => {
    var command: Command = commandParser.parse(input);

    if (command === null){
        console.log(`Instruction: ${input} did not make sense. Ignoring...`);
    }
    else {
        gridManager.update(command);
    }
});
