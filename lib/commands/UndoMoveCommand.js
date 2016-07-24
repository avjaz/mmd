"use strict";
var UndoMoveCommand = (function () {
    function UndoMoveCommand() {
    }
    UndoMoveCommand.prototype.undo = function (piece, command) {
        switch (piece.orientation) {
            case "NORTH": {
                piece.yPos = piece.yPos - 1;
                break;
            }
            case "EAST": {
                piece.xPos = piece.xPos - 1;
                break;
            }
            case "SOUTH": {
                piece.yPos = piece.yPos + 1;
                break;
            }
            case "WEST": {
                piece.xPos = piece.xPos + 1;
                break;
            }
        }
    };
    return UndoMoveCommand;
}());
module.exports = UndoMoveCommand;
