"use strict";
class PlaceCommand {
    constructor(args) {
        this.xPos = parseInt(args[0]);
        this.yPos = parseInt(args[1]);
        this.orientation = args[2];
    }
    execute(piece) {
        piece.xPos = this.xPos;
        piece.yPos = this.yPos;
        piece.orientation = this.orientation;
    }
}
module.exports = PlaceCommand;
