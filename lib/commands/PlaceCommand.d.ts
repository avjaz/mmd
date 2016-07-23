import Command = require("./Command");
import Piece = require("../model/Piece");
declare class PlaceCommand implements Command {
    private xPos;
    private yPos;
    private orientation;
    constructor(args: string[]);
    execute(piece: Piece): void;
}
export = PlaceCommand;
