"use strict";
class RotateLeftCommand {
    constructor() {
    }
    execute(piece) {
        switch (piece.orientation) {
            case "NORTH": {
                piece.orientation = "WEST";
                break;
            }
            case "EAST": {
                piece.orientation = "NORTH";
                break;
            }
            case "SOUTH": {
                piece.orientation = "EAST";
                break;
            }
            case "WEST": {
                piece.orientation = "SOUTH";
                break;
            }
        }
    }
    undo(piece) {
    }
}
module.exports = RotateLeftCommand;
