"use strict";
var RotateRighttCommand = (function () {
    function RotateRighttCommand() {
    }
    RotateRighttCommand.prototype.execute = function (piece) {
        switch (piece.orientation) {
            case "NORTH": {
                piece.orientation = "EAST";
                break;
            }
            case "EAST": {
                piece.orientation = "SOUTH";
                break;
            }
            case "SOUTH": {
                piece.orientation = "WEST";
                break;
            }
            case "WEST": {
                piece.orientation = "NORTH";
                break;
            }
        }
    };
    return RotateRighttCommand;
}());
module.exports = RotateRighttCommand;
