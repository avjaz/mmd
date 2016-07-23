"use strict";
var Commands = require('./Commands');
var PlaceCommand = require('./PlaceCommand');
var ReportCommand = require("./ReportCommand");
var RotateLeftCommand = require("./RotateLeftCommand");
var RotateRightCommand = require("./RotateRightCommand");
var MoveCommand = require("./MoveCommand");
var CommandFactory = (function () {
    function CommandFactory() {
    }
    CommandFactory.prototype.create = function (commandType, args) {
        switch (commandType) {
            case Commands[Commands.PLACE]:
                try {
                    return new PlaceCommand(args);
                }
                catch (e) {
                    return null;
                }
            case Commands[Commands.REPORT]:
                return new ReportCommand();
            case Commands[Commands.LEFT]:
                return new RotateLeftCommand();
            case Commands[Commands.RIGHT]:
                return new RotateRightCommand();
            case Commands[Commands.MOVE]:
                return new MoveCommand();
            default:
                return null;
        }
    };
    return CommandFactory;
}());
module.exports = CommandFactory;
