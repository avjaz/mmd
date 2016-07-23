import Command = require("./Command");
import Piece = require("../model/Piece");

class ReportCommand implements Command {

    constructor() {}

    execute(piece: Piece):void {
        console.log(`${piece.name} is at ${piece.xPos}:${piece.yPos}, facing ${piece.orientation}`);
    }
}

export = ReportCommand;