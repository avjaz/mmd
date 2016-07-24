import Piece = require("./model/Piece");
import Command = require("./commands/Command");
import UndoCommand = require("./commands/UndoCommand");
import Grid = require("./model/Grid");
import HistoryManager = require("./HistoryManager");

class GridManager {
    private _grid: Grid;
    private _pieces: Piece[];
    private _historyManager: HistoryManager;

    constructor(grid: Grid, pieces: Piece[]) {
        this._grid = grid;
        this._pieces = pieces;
        this._historyManager = new HistoryManager();
    }

    update(command: Command) {
        for (var piece of this._pieces) {
            this._grid.update(piece, command);
            if (this.isPiecePlacedOnGrid(piece) && !this.isPieceWithinBounds(piece)) {
                var undoCommand: UndoCommand = new UndoCommand(this._historyManager.getCurrentPosition(piece));
                undoCommand.execute(piece);
                console.log('Instruction would take robot out of bounds. Ignoring...');
            }
            else {
                this._historyManager.addPosition(piece);
            }
        }
    }

    private isPieceWithinBounds(piece: Piece): boolean {
        return piece.xPos >= 0 &&
            piece.xPos < this._grid.width &&
            piece.yPos >= 0 &&
            piece.yPos < this._grid.height;
    }

    private isPiecePlacedOnGrid(piece: Piece): boolean {
        return piece.xPos !== undefined &&
            piece.yPos !== undefined &&
            piece.orientation !== undefined;
    }

}

export = GridManager;