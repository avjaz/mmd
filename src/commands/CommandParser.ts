/**
 * Created by markbeavis on 23/07/16.
 */
import Command = require('./Command');
import Commands = require("./Commands");
import CommandFactory = require('./CommandFactory');
import Orientation = require("../model/Orientation");

class CommandParser {
    commandFactory: CommandFactory;

    constructor() {
        this.commandFactory = new CommandFactory();
    }

    parse(command: string): Command {
        if (command) {
            //Split the input on space ' ' so we can grab the first word of the input string
            var values: string[] = command.split(' ');
            var commandAction: string = values[0];

            //Check to see if the input is a valid command, return null if not
            if (Commands[<any>commandAction] === undefined) {
                return null;
            }

            //Now get the command args (if any)
            if (values.length > 1) {
                var commandArgs: string[] = values[1].split(',');

                //Do some checking on the args
                //There must be 3 args
                if (commandArgs.length !== 3) {
                    return null;
                }

                //xpos must be a number
                if (parseInt(commandArgs[0]) === NaN) {
                    return null;
                }

                //ypos nust be a number
                if (parseInt(commandArgs[1]) === NaN) {
                    return null;
                }

                //orientation must be one of NORTH, EAST, SOUTH, WEST
                if (!Orientation.isValid(commandArgs[2])) {
                    return null;
                }
            }
            return this.commandFactory.create(commandAction, commandArgs);
        }

        return null;
    }
}

export = CommandParser;
