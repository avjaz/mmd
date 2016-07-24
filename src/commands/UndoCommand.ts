import Piece = require("../model/Piece");
import Command = require("./Command");
import Position = require("../model/Position");

class UndoCommand implements Command{

    private _previousPosition: Position;

    constructor(position: Position) {
        this._previousPosition = position;
    }

    execute(piece:Piece): void {
        piece.xPos = this._previousPosition.xPos;
        piece.yPos = this._previousPosition.yPos;
        piece.orientation = this._previousPosition.orientation;
    }
}

export = UndoCommand;