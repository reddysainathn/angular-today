"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        set: function (cou1) {
            this._likesCount = cou1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (cou2) {
            this._isSelected = cou2;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.onCLick = function () {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // }
        // else {
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
