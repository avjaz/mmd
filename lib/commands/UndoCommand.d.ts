import Piece = require("../model/Piece");
import Command = require("./Command");
import Position = require("../model/Position");
declare class UndoCommand implements Command {
    private _previousPosition;
    constructor(position: Position);
    execute(piece: Piece): void;
}
export = UndoCommand;
