declare class Position {
    private _xPos;
    private _yPos;
    private _orientation;
    constructor(xPos: number, yPos: number, orientation: string);
    xPos: number;
    yPos: number;
    orientation: string;
}
export = Position;
