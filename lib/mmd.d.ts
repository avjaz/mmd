declare module 'mmd' {
	 class Orientation {
	    static NORTH: string;
	    static EAST: string;
	    static SOUTH: string;
	    static WEST: string;
	    static isValid: (val: string) => boolean;
	}
	export = Orientation;

}
declare module 'mmd' {
	 class Position {
	    private _xPos;
	    private _yPos;
	    private _orientation;
	    constructor(xPos: number, yPos: number, orientation: string);
	    xPos: number;
	    yPos: number;
	    orientation: string;
	}
	export = Position;

}
declare module 'mmd' {
	 abstract class Piece {
	    private _position;
	    protected _name: string;
	    constructor(xPos: number, yPos: number, orientation: string);
	    xPos: number;
	    yPos: number;
	    orientation: string;
	    name: string;
	}
	export = Piece;

}
declare module 'mmd' {
	import Piece = require('../model/Piece');
	interface Command {
	    execute(piece: Piece): void;
	}
	export = Command;

}
declare module 'mmd' {
	import Piece = require('../model/Piece');
	import Command = require('Command');
	import Position = require('../model/Position'); class UndoCommand implements Command {
	    private _previousPosition;
	    constructor(position: Position);
	    execute(piece: Piece): void;
	}
	export = UndoCommand;

}
declare module 'mmd' {
	import Command = require('../commands/Command');
	import Piece = require('Piece'); class Grid {
	    private _width;
	    private _height;
	    constructor(width: number, height: number);
	    update(piece: Piece, command: Command): void;
	    width: number;
	    height: number;
	}
	export = Grid;

}
declare module 'mmd' {
	import Piece = require('model/Piece');
	import Position = require('model/Position'); class HistoryManager {
	    private _pieceHistory;
	    constructor();
	    addPosition(piece: Piece): void;
	    getCurrentPosition(piece: Piece): Position;
	}
	export = HistoryManager;

}
declare module 'mmd' {
	import Piece = require('model/Piece');
	import Command = require('commands/Command');
	import Grid = require('model/Grid'); class GridManager {
	    private _grid;
	    private _pieces;
	    private _historyManager;
	    constructor(grid: Grid, pieces: Piece[]);
	    update(command: Command): void;
	    private isPieceWithinBounds(piece);
	    private isPiecePlacedOnGrid(piece);
	}
	export = GridManager;

}
declare module 'mmd' {
	 enum Commands {
	    PLACE = 0,
	    MOVE = 1,
	    LEFT = 2,
	    RIGHT = 3,
	    REPORT = 4,
	}
	export = Commands;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class PlaceCommand implements Command {
	    private xPos;
	    private yPos;
	    private orientation;
	    constructor(args: string[]);
	    execute(piece: Piece): void;
	}
	export = PlaceCommand;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class ReportCommand implements Command {
	    constructor();
	    execute(piece: Piece): void;
	    undo(piece: Piece): void;
	}
	export = ReportCommand;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class RotateLeftCommand implements Command {
	    constructor();
	    execute(piece: Piece): void;
	    undo(piece: Piece): void;
	}
	export = RotateLeftCommand;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class RotateRightCommand implements Command {
	    constructor();
	    execute(piece: Piece): void;
	    undo(piece: Piece): void;
	}
	export = RotateRightCommand;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class MoveCommand implements Command {
	    constructor();
	    execute(piece: Piece): void;
	    undo(piece: Piece): void;
	}
	export = MoveCommand;

}
declare module 'mmd' {
	/**
	 * Created by markbeavis on 23/07/16.
	 */
	import Command = require('Command'); class CommandFactory {
	    create(commandType: string, args?: string[]): Command;
	}
	export = CommandFactory;

}
declare module 'mmd' {
	/**
	 * Created by markbeavis on 23/07/16.
	 */
	import Command = require('Command');
	import CommandFactory = require('CommandFactory'); class CommandParser {
	    commandFactory: CommandFactory;
	    constructor();
	    parse(command: string): Command;
	}
	export = CommandParser;

}
declare module 'mmd' {
	import Piece = require('Piece'); class Robot extends Piece {
	    constructor(xPos?: number, yPos?: number, orientation?: string);
	}
	export = Robot;

}
/// <reference path="../typings/index.d.ts" />
