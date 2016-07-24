import Command = require('../commands/Command');
import Piece = require('./Piece');
declare class Grid {
    private _width;
    private _height;
    constructor(width: number, height: number);
    update(piece: Piece, command: Command): void;
    width: number;
    height: number;
}
export = Grid;
