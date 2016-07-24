"use strict";
class Position {
    constructor(xPos, yPos, orientation) {
        this._xPos = xPos;
        this._yPos = yPos;
        this._orientation = orientation;
    }
    get xPos() {
        return this._xPos;
    }
    set xPos(val) {
        this._xPos = val;
    }
    get yPos() {
        return this._yPos;
    }
    set yPos(val) {
        this._yPos = val;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(val) {
        this._orientation = val;
    }
}
module.exports = Position;
