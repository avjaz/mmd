import Command = require("./Command");
import Piece = require("../model/Piece");
declare class MoveCommand implements Command {
    constructor();
    execute(piece: Piece): void;
}
export = MoveCommand;
