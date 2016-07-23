"use strict";
var CommandFactory = require('./CommandFactory');
var CommandParser = (function () {
    function CommandParser() {
        this.commandFactory = new CommandFactory();
    }
    CommandParser.prototype.parse = function (command) {
        if (command) {
            var values = command.split(' ');
            var commandAction = values[0];
            if (values.length > 1) {
                var commandArgs = values[1].split(',');
            }
            return this.commandFactory.create(commandAction, commandArgs);
        }
        return null;
    };
    return CommandParser;
}());
module.exports = CommandParser;
