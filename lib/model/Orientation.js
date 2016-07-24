"use strict";
class Orientation {
}
Orientation.NORTH = 'NORTH';
Orientation.EAST = 'EAST';
Orientation.SOUTH = 'SOUTH';
Orientation.WEST = 'WEST';
Orientation.isValid = function (val) {
    return val === Orientation.NORTH ||
        val === Orientation.EAST ||
        val === Orientation.SOUTH ||
        val === Orientation.WEST;
};
module.exports = Orientation;
