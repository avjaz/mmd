import Command = require("./Command");
import Piece = require("../model/Piece");
declare class ReportCommand implements Command {
    constructor();
    execute(piece: Piece): void;
    undo(piece: Piece): void;
}
export = ReportCommand;
