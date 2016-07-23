import Command = require("./Command");
import Piece = require("../model/Piece");
declare class RotateRighttCommand implements Command {
    constructor();
    execute(piece: Piece): void;
}
export = RotateRighttCommand;
