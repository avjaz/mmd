import Orientation = require("./Orientation");
import Position = require("./Position");

/**
 * A piece on the Grid.
 * Subclasses should override the name property below.
 */
abstract class Piece {
    private _position: Position;
    protected _name: string;

    constructor(xPos: number, yPos: number, orientation: string) {
        this._position = new Position(xPos, yPos, orientation);
    }

    get xPos(): number {
        return this._position.xPos;
    }

    set xPos(val: number) {
        this._position.xPos = val;
    }

    get yPos(): number {
        return this._position.yPos;
    }

    set yPos(val: number) {
        this._position.yPos = val;
    }

    get orientation(): string {
        return this._position.orientation;
    }

    set orientation(val: string) {
        this._position.orientation = val;
    }

    get name(): string {
        return this._name;
    }
}
export = Piece;
