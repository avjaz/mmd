import Piece = require("../model/Piece");
import Command = require("./Command");
import UndoCommand = require("./UndoCommand");
declare class UndoMoveCommand implements UndoCommand {
    constructor();
    undo(piece: Piece, command: Command): void;
}
export = UndoMoveCommand;
