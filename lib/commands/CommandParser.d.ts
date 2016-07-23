import Command = require('./Command');
import CommandFactory = require('./CommandFactory');
declare class CommandParser {
    commandFactory: CommandFactory;
    constructor();
    parse(command: string): Command;
}
export = CommandParser;
