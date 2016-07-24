"use strict";
const Piece = require("./Piece");
class Robot extends Piece {
    constructor(xPos, yPos, orientation) {
        super(xPos, yPos, orientation);
        this._name = 'Robot';
    }
}
module.exports = Robot;
