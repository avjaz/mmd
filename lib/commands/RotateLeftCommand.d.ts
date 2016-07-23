import Command = require("./Command");
import Piece = require("../model/Piece");
declare class RotateLeftCommand implements Command {
    constructor();
    execute(piece: Piece): void;
}
export = RotateLeftCommand;
