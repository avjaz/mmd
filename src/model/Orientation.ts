class Orientation {

    static NORTH: string = 'NORTH';
    static EAST: string = 'EAST';
    static SOUTH: string = 'SOUTH';
    static WEST: string = 'WEST';

    static isValid = function (val: string): boolean {
        return val === Orientation.NORTH ||
                val === Orientation.EAST ||
                val === Orientation.SOUTH ||
                val === Orientation.WEST;
    }

}

export = Orientation;
