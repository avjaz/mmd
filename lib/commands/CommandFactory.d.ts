import Command = require('./Command');
declare class CommandFactory {
    create(commandType: string, args?: string[]): Command;
}
export = CommandFactory;
