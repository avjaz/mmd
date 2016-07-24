"use strict";
class Grid {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    update(piece, command) {
        command.execute(piece);
    }
    get width() {
        return this._width;
    }
    set width(val) {
        this._width = val;
    }
    get height() {
        return this._height;
    }
    set height(val) {
        this._height = val;
    }
}
module.exports = Grid;
