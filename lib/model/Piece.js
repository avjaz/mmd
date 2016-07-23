"use strict";
var Piece = (function () {
    function Piece(xPos, yPos, orientation) {
        this._xPos = xPos;
        this._yPos = yPos;
        this._orientation = orientation;
    }
    Piece.prototype.restore = function () {
        this._xPos = this._oldXPos;
        this._yPos = this._oldYPos;
    };
    Object.defineProperty(Piece.prototype, "oldXPos", {
        get: function () {
            return this._oldXPos;
        },
        set: function (val) {
            this._oldXPos = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "xPos", {
        get: function () {
            return this._xPos;
        },
        set: function (val) {
            this._oldXPos = this._xPos;
            this._xPos = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "oldYPos", {
        get: function () {
            return this._oldYPos;
        },
        set: function (val) {
            this._oldYPos = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "yPos", {
        get: function () {
            return this._yPos;
        },
        set: function (val) {
            this._oldYPos = this._yPos;
            this._yPos = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (val) {
            this._orientation = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Piece;
}());
module.exports = Piece;
