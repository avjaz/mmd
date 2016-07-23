/**
 * Created by markbeavis on 23/07/16.
 */
import Command = require('./Command');
import CommandFactory = require('./CommandFactory');

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

            //Now get the command args (if any)
            if (values.length > 1) {
                var commandArgs: string[] = values[1].split(',');
            }
            return this.commandFactory.create(commandAction, commandArgs);
        }

        return null;
    }
}

export = CommandParser;
