"use strict";
const Commands = require("./Commands");
const CommandFactory = require('./CommandFactory');
const Orientation = require("../model/Orientation");
class CommandParser {
    constructor() {
        this.commandFactory = new CommandFactory();
    }
    parse(command) {
        if (command) {
            var values = command.split(' ');
            var commandAction = values[0];
            if (Commands[commandAction] === undefined) {
                return null;
            }
            if (values.length > 1) {
                var commandArgs = values[1].split(',');
                if (commandArgs.length !== 3) {
                    return null;
                }
                if (parseInt(commandArgs[0]) === NaN) {
                    return null;
                }
                if (parseInt(commandArgs[1]) === NaN) {
                    return null;
                }
                if (!Orientation.isValid(commandArgs[2])) {
                    return null;
                }
            }
            return this.commandFactory.create(commandAction, commandArgs);
        }
        return null;
    }
}
module.exports = CommandParser;
