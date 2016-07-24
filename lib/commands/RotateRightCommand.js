"use strict";
class RotateRightCommand {
    constructor() {
    }
    execute(piece) {
        switch (piece.orientation) {
            case "NORTH": {
                piece.orientation = "EAST";
                break;
            }
            case "EAST": {
                piece.orientation = "SOUTH";
                break;
            }
            case "SOUTH": {
                piece.orientation = "WEST";
                break;
            }
            case "WEST": {
                piece.orientation = "NORTH";
                break;
            }
        }
    }
    undo(piece) {
    }
}
module.exports = RotateRightCommand;
