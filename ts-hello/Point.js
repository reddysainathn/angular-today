"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this._x + " " + "Y:" + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (al) {
            if (al < 0)
                throw new Error('value cannot be less than 0');
            this._x = al;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
