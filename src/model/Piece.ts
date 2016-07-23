import Orientation = require("./Orientation");

abstract class Piece {
    private _oldXPos: number;
    private _oldYPos: number;
    private _xPos: number;
    private _yPos: number;
    private _orientation: string;
    protected _name: string;

    constructor(xPos: number, yPos: number, orientation: string) {
        this._xPos = xPos;
        this._yPos = yPos;
        this._orientation = orientation;
    }

    restore(): void {
        this._xPos = this._oldXPos;
        this._yPos = this._oldYPos;
    }

    get oldXPos(): number {
        return this._oldXPos;
    }

    set oldXPos(val: number) {
        this._oldXPos = val;
    }

    get xPos(): number {
        return this._xPos;
    }

    set xPos(val: number) {
        this._oldXPos = this._xPos;
        this._xPos = val;
    }

    get oldYPos(): number {
        return this._oldYPos;
    }

    set oldYPos(val: number) {
        this._oldYPos = val;
    }

    get yPos(): number {
        return this._yPos;
    }

    set yPos(val: number) {
        this._oldYPos = this._yPos;
        this._yPos = val;
    }

    get orientation(): string {
        return this._orientation;
    }

    set orientation(val: string) {
        this._orientation = val;
    }

    get name(): string {
        return this._name;
    }
}
export = Piece;
