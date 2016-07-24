import Piece = require("../model/Piece");

/**
 * Common interface for all commands
 */
interface Command {

    execute(piece: Piece): void;
}

export = Command;
