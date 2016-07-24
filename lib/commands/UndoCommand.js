"use strict";
class UndoCommand {
    constructor(position) {
        this._previousPosition = position;
    }
    execute(piece) {
        piece.xPos = this._previousPosition.xPos;
        piece.yPos = this._previousPosition.yPos;
        piece.orientation = this._previousPosition.orientation;
    }
}
module.exports = UndoCommand;
