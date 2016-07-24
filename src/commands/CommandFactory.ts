/**
 * Created by markbeavis on 23/07/16.
 */
import Command = require('./Command');
import Commands = require('./Commands');
import PlaceCommand = require('./PlaceCommand');
import ReportCommand = require("./ReportCommand");
import RotateLeftCommand = require("./RotateLeftCommand");
import RotateRightCommand = require("./RotateRightCommand");
import MoveCommand = require("./MoveCommand");
import Piece = require("../model/Piece");

/**
 * A factory for our Commands, returning Commands based on commandType (parsed by stdin)
 */
class CommandFactory {

    public create(commandType: string, args?: string[]): Command {
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

export = CommandFactory;
