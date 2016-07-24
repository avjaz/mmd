import Piece = require("./Piece");
import Orientation = require("./Orientation");

/**
 * A Robot class (extending piece)
 */
class Robot extends Piece {

    constructor(xPos?: number, yPos?: number, orientation?: string) {
        super(xPos, yPos, orientation);
        this._name = 'Robot';
    }

}

export = Robot;
