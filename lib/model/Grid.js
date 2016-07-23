"use strict";
var Grid = (function () {
    function Grid(width, height, pieces) {
        this.width = width;
        this.height = height;
        this.pieces = pieces;
    }
    Grid.prototype.update = function (command) {
        for (var _i = 0, _a = this.pieces; _i < _a.length; _i++) {
            var piece = _a[_i];
            command.execute(piece);
            if (this.isPiecePlacedOnGrid(piece) && !this.isPieceWithinBounds(piece)) {
                piece.restore();
                console.log('Instruction would take robot out of bounds. Ignoring...');
            }
        }
    };
    Grid.prototype.isPieceWithinBounds = function (piece) {
        return piece.xPos >= 0 &&
            piece.xPos < this.width &&
            piece.yPos >= 0 &&
            piece.yPos < this.height;
    };
    Grid.prototype.isPiecePlacedOnGrid = function (piece) {
        return piece.xPos !== undefined &&
            piece.yPos !== undefined &&
            piece.orientation !== undefined;
    };
    return Grid;
}());
module.exports = Grid;
