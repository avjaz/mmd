"use strict";
const Commands = require('./Commands');
const PlaceCommand = require('./PlaceCommand');
const ReportCommand = require("./ReportCommand");
const RotateLeftCommand = require("./RotateLeftCommand");
const RotateRightCommand = require("./RotateRightCommand");
const MoveCommand = require("./MoveCommand");
class CommandFactory {
    create(commandType, args) {
        switch (commandType) {
            case Commands[Commands.PLACE]:
                return new PlaceCommand(args);
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
    }
}
module.exports = CommandFactory;
