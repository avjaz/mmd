import Command = require('../commands/Command');
import Piece = require('./Piece');
import UndoCommand = require("../commands/UndoCommand");

/**
 * A basic Grid class of given width and height.
 *
 */
class Grid {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    /**
     * Performs the given Command on the given Piece
     *
     * @param piece
     * @param command
     */
    update(piece: Piece, command: Command) {
        command.execute(piece);
    }

    get width(): number {
        return this._width;
    }

    set width(val: number) {
        this._width = val;
    }

    get height(): number {
        return this._height;
    }

    set height(val: number) {
        this._height = val;
    }
}

export = Grid;
