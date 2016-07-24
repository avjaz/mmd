"use strict";
const Position = require("./model/Position");
class HistoryManager {
    constructor() {
        this._pieceHistory = new Map();
    }
    addPosition(piece) {
        var positions = this._pieceHistory.get(piece);
        if (!positions) {
            positions = new Array();
            this._pieceHistory.set(piece, positions);
        }
        positions.push(new Position(piece.xPos, piece.yPos, piece.orientation));
    }
    getCurrentPosition(piece) {
        var positions = this._pieceHistory.get(piece);
        if (!positions) {
            return null;
        }
        return positions.pop();
    }
}
module.exports = HistoryManager;
