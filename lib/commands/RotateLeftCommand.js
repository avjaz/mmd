"use strict";
var RotateLeftCommand = (function () {
    function RotateLeftCommand() {
    }
    RotateLeftCommand.prototype.execute = function (piece) {
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
    };
    return RotateLeftCommand;
}());
module.exports = RotateLeftCommand;
