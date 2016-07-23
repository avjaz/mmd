"use strict";
var MoveCommand = (function () {
    function MoveCommand() {
    }
    MoveCommand.prototype.execute = function (piece) {
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
    };
    return MoveCommand;
}());
module.exports = MoveCommand;
