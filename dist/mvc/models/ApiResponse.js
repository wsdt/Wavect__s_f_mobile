"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiResponse = (function () {
    function ApiResponse() {
    }
    Object.defineProperty(ApiResponse.prototype, "err", {
        get: function () {
            return this._err;
        },
        set: function (value) {
            this._err = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiResponse.prototype, "res", {
        get: function () {
            return this._res;
        },
        set: function (value) {
            this._res = value;
        },
        enumerable: true,
        configurable: true
    });
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map