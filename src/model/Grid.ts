/**
 * Created by markbeavis on 23/07/16.
 */
import Command = require('../commands/Command');
import Piece = require('./Piece');

class Grid {
    width: number;
    height: number;
    pieces: Piece[];

    constructor(width: number, height: number, pieces: Piece[]) {
        this.width = width;
        this.height = height;
        this.pieces = pieces;
    }

    update(command: Command) {
        for (var piece of this.pieces) {
            command.execute(piece);
            if (this.isPiecePlacedOnGrid(piece) && !this.isPieceWithinBounds(piece)) {
                piece.restore();
                console.log('Instruction would take robot out of bounds. Ignoring...');
            }
        }
    }

    private isPieceWithinBounds(piece: Piece): boolean {
        return piece.xPos >= 0 &&
            piece.xPos < this.width &&
            piece.yPos >= 0 &&
            piece.yPos < this.height;
    }

    private isPiecePlacedOnGrid(piece: Piece): boolean {
        return piece.xPos !== undefined &&
            piece.yPos !== undefined &&
            piece.orientation !== undefined;

    }
}

export = Grid;
