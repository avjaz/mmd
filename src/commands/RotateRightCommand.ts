import Command = require("./Command");
import Piece = require("../model/Piece");
import Orientation = require("../model/Orientation");

/**
 * Command to Rotate a Piece to the right.
 */
class RotateRightCommand implements Command{

    constructor() {}

    execute(piece: Piece):void {
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

    undo(piece:Piece):void {

    }
}

export = RotateRightCommand;