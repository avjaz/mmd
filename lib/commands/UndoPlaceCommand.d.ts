import UndoCommand = require("./UndoCommand");
import Piece = require("../model/Piece");
import Command = require("./Command");
declare class UndoPlaceCommand implements UndoCommand {
    constructor();
    undo(piece: Piece, command: Command): void;
}
export = UndoPlaceCommand;
