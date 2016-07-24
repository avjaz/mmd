"use strict";
class ReportCommand {
    constructor() {
    }
    execute(piece) {
        console.log(`${piece.name} is at X:${piece.xPos}, Y:${piece.yPos}, facing ${piece.orientation}`);
    }
    undo(piece) {
    }
}
module.exports = ReportCommand;
