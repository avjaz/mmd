import Command = require("./Command");
import Piece = require("../model/Piece");
import Orientation = require("../model/Orientation");

class MoveCommand implements Command {

    constructor() {}

    execute(piece: Piece):void {
        switch (piece.orientation) {
            case "NORTH": {
                piece.yPos = piece.yPos + 1;
                break;
            }
            case "EAST": {
                piece.xPos = piece.xPos + 1;
                break;
            }
            case "SOUTH": {
                piece.yPos = piece.yPos - 1;
                break;
            }
            case "WEST": {
                piece.xPos = piece.xPos - 1;
                break;
            }
        }
    }

    undo(piece:Piece):void {

    }


}

export = MoveCommand;