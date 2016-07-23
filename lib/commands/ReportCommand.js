"use strict";
var ReportCommand = (function () {
    function ReportCommand() {
    }
    ReportCommand.prototype.execute = function (piece) {
        console.log(piece.name + " is at " + piece.xPos + ":" + piece.yPos + ", facing " + piece.orientation);
    };
    return ReportCommand;
}());
module.exports = ReportCommand;
