import Piece = require("./model/Piece");
import Position = require("./model/Position");
declare class HistoryManager {
    private _pieceHistory;
    constructor();
    addPosition(piece: Piece): void;
    getCurrentPosition(piece: Piece): Position;
}
export = HistoryManager;
