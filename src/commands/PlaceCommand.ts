import Command = require("./Command");
import Piece = require("../model/Piece");
import Orientation = require("../model/Orientation");

/**
 * Command that sets the position of a pieve.
 */
class PlaceCommand implements Command {

    private xPos: number;
    private yPos: number;
    private orientation: string;

    constructor(args: string[]) {
        this.xPos = parseInt(args[0]);
        this.yPos = parseInt(args[1]);
        this.orientation = args[2];
    }

    execute(piece: Piece): void {
        piece.xPos = this.xPos;
        piece.yPos = this.yPos;
        piece.orientation = this.orientation;
    }
}

export = PlaceCommand;