"use strict";
var PlaceCommand = (function () {
    function PlaceCommand(args) {
        this.xPos = parseInt(args[0]);
        this.yPos = parseInt(args[1]);
        this.orientation = args[2];
    }
    PlaceCommand.prototype.execute = function (piece) {
        piece.xPos = this.xPos;
        piece.yPos = this.yPos;
        piece.orientation = this.orientation;
    };
    return PlaceCommand;
}());
module.exports = PlaceCommand;
