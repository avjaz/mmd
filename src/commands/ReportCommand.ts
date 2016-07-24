import Command = require("./Command");
import Piece = require("../model/Piece");

class ReportCommand implements Command {

    constructor() {}

    execute(piece: Piece):void {
        console.log(`${piece.name} is at X:${piece.xPos}, Y:${piece.yPos}, facing ${piece.orientation}`);
    }

    undo(piece:Piece):void {

    }
}

export = ReportCommand;