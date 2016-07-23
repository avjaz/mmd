declare abstract class Piece {
    private _oldXPos;
    private _oldYPos;
    private _xPos;
    private _yPos;
    private _orientation;
    protected _name: string;
    constructor(xPos: number, yPos: number, orientation: string);
    restore(): void;
    oldXPos: number;
    xPos: number;
    oldYPos: number;
    yPos: number;
    orientation: string;
    name: string;
}
export = Piece;
