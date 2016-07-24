import Orientation = require("./Orientation");

/**
 * A position class
 */
class Position {

    private _xPos: number;
    private _yPos: number;
    private _orientation: string;

    constructor(xPos: number, yPos: number, orientation: string) {
        this._xPos = xPos;
        this._yPos = yPos;
        this._orientation = orientation;
    }

    get xPos(): number {
        return this._xPos;
    }

    set xPos(val: number) {
        this._xPos = val;
    }

    get yPos(): number {
        return this._yPos;
    }

    set yPos(val: number) {
        this._yPos = val;
    }

    get orientation(): string {
        return this._orientation;
    }

    set orientation(val: string) {
        this._orientation = val;
    }
}

export = Position;