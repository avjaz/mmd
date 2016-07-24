import Piece = require("./model/Piece");
import Position = require("./model/Position");

class HistoryManager {

    private _pieceHistory: Map<Piece, Position[]> = new Map();

    constructor() {}

    addPosition(piece: Piece): void {
        var positions: Position[] = this._pieceHistory.get(piece);
        if (!positions) {
            positions = new Array<Position>();
            this._pieceHistory.set(piece, positions);
        }
        positions.push(new Position(piece.xPos, piece.yPos, piece.orientation));
    }

    getCurrentPosition(piece: Piece): Position {
        var positions:Position[] = this._pieceHistory.get(piece);
        if (!positions) {
            return null;
        }
        return positions.pop();
    }
}

export = HistoryManager;
