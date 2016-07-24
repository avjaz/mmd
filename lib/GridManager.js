"use strict";
const UndoCommand = require("./commands/UndoCommand");
class GridManager {
    constructor(grid, pieces) {
        this._grid = grid;
        this._pieces = pieces;
    }
    update(command) {
        for (var piece of this._pieces) {
            this._grid.update(piece, command);
            if (this.isPiecePlacedOnGrid(piece) && !this.isPieceWithinBounds(piece)) {
                var undoCommand = new UndoCommand(this._historyManager.getCurrentPosition(piece));
                undoCommand.execute(piece);
                console.log('Instruction would take robot out of bounds. Ignoring...');
            }
            else {
                this._historyManager.addPosition(piece);
            }
        }
    }
    isPieceWithinBounds(piece) {
        return piece.xPos >= 0 &&
            piece.xPos < this._grid.width &&
            piece.yPos >= 0 &&
            piece.yPos < this._grid.height;
    }
    isPiecePlacedOnGrid(piece) {
        return piece.xPos !== undefined &&
            piece.yPos !== undefined &&
            piece.orientation !== undefined;
    }
}
module.exports = GridManager;
