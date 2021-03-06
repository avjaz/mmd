declare abstract class Piece {
    private _position;
    protected _name: string;
    constructor(xPos: number, yPos: number, orientation: string);
    xPos: number;
    yPos: number;
    orientation: string;
    name: string;
}
export = Piece;
