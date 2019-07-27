"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpirationTimeObj = (function () {
    function ExpirationTimeObj(milliSeconds) {
        this.milliseconds = milliSeconds;
        var hours, minute, seconds;
        seconds = Math.floor(milliSeconds / 1000);
        minute = Math.floor(seconds / 60);
        this.seconds = seconds % 60;
        hours = Math.floor(minute / 60);
        this.minutes = minute % 60;
        this.days = Math.floor(hours / 24);
        this.hours = hours % 24;
    }
    Object.defineProperty(ExpirationTimeObj.prototype, "milliseconds", {
        get: function () {
            return this._milliseconds;
        },
        set: function (value) {
            this._milliseconds = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpirationTimeObj.prototype, "days", {
        get: function () {
            return this._days;
        },
        set: function (value) {
            this._days = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpirationTimeObj.prototype, "hours", {
        get: function () {
            return this._hours;
        },
        set: function (value) {
            this._hours = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpirationTimeObj.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (value) {
            this._minutes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpirationTimeObj.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (value) {
            this._seconds = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExpirationTimeObj;
}());
exports.ExpirationTimeObj = ExpirationTimeObj;
//# sourceMappingURL=ExpirationTimeObj.js.map