"use strict";
const Position = require("./Position");
class Piece {
    constructor(xPos, yPos, orientation) {
        this._position = new Position(xPos, yPos, orientation);
    }
    get xPos() {
        return this._position.xPos;
    }
    set xPos(val) {
        this._position.xPos = val;
    }
    get yPos() {
        return this._position.yPos;
    }
    set yPos(val) {
        this._position.yPos = val;
    }
    get orientation() {
        return this._position.orientation;
    }
    set orientation(val) {
        this._position.orientation = val;
    }
    get name() {
        return this._name;
    }
}
module.exports = Piece;
