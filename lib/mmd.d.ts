declare module 'mmd' {
	 enum Orientation {
	    NORTH = 0,
	    EAST = 1,
	    SOUTH = 2,
	    WEST = 3,
	}
	export = Orientation;

}
declare module 'mmd' {
	 abstract class Piece {
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

}
declare module 'mmd' {
	import Piece = require('../model/Piece');
	interface Command {
	    execute(piece: Piece): void;
	}
	export = Command;

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
	}
	export = ReportCommand;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class RotateLeftCommand implements Command {
	    constructor();
	    execute(piece: Piece): void;
	}
	export = RotateLeftCommand;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class RotateRighttCommand implements Command {
	    constructor();
	    execute(piece: Piece): void;
	}
	export = RotateRighttCommand;

}
declare module 'mmd' {
	import Command = require('Command');
	import Piece = require('../model/Piece'); class MoveCommand implements Command {
	    constructor();
	    execute(piece: Piece): void;
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
	/**
	 * Created by markbeavis on 23/07/16.
	 */
	import Command = require('../commands/Command');
	import Piece = require('Piece'); class Grid {
	    width: number;
	    height: number;
	    pieces: Piece[];
	    constructor(width: number, height: number, pieces: Piece[]);
	    update(command: Command): void;
	    private isPieceWithinBounds(piece);
	    private isPiecePlacedOnGrid(piece);
	}
	export = Grid;

}
declare module 'mmd' {
	import Piece = require('Piece'); class Robot extends Piece {
	    constructor(xPos?: number, yPos?: number, orientation?: string);
	}
	export = Robot;

}
/// <reference path="../typings/index.d.ts" />
