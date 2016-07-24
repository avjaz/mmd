import Piece = require("./model/Piece");
import Command = require("./commands/Command");
import Grid = require("./model/Grid");
declare class GridManager {
    private _grid;
    private _pieces;
    private _historyManager;
    constructor(grid: Grid, pieces: Piece[]);
    update(command: Command): void;
    private isPieceWithinBounds(piece);
    private isPiecePlacedOnGrid(piece);
}
export = GridManager;
