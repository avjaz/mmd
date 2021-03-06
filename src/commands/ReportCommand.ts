import Command = require("./Command");
import Piece = require("../model/Piece");

/**
 * Command that logs the Position of a Piece to the console.
 */
class ReportCommand implements Command {

    constructor() {}

    execute(piece: Piece):void {
        console.log(`${piece.name} is at X:${piece.xPos}, Y:${piece.yPos}, facing ${piece.orientation}`);
    }
}

export = ReportCommand;