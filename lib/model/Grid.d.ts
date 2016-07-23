import Command = require('../commands/Command');
import Piece = require('./Piece');
declare class Grid {
    width: number;
    height: number;
    pieces: Piece[];
    constructor(width: number, height: number, pieces: Piece[]);
    update(command: Command): void;
    private isPieceWithinBounds(piece);
    private isPiecePlacedOnGrid(piece);
}
export = Grid;
