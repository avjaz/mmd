import Piece = require("../model/Piece");

interface Command {

    execute(piece: Piece): void;
}

export = Command;
