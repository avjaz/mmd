import Command = require("./Command");
import Piece = require("../model/Piece");
import Orientation = require("../model/Orientation");

class RotateLeftCommand implements Command{

    constructor() {}

    execute(piece: Piece):void {
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

    undo(piece:Piece):void {

    }
}

export = RotateLeftCommand;