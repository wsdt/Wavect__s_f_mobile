"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["LOADING"] = "loading";
    LoadingStatus["DONE"] = "done";
    LoadingStatus["ERROR"] = "error";
    LoadingStatus["NOT_AVAILABLE"] = "not_available";
})(LoadingStatus = exports.LoadingStatus || (exports.LoadingStatus = {}));
var defaultVal = {
    setLoading: function (_) {
        console.error('LoadingHoc: Calling default context!');
    },
    setRefresh: function (_) {
        console.error('LoadingHoc: Calling default context for setRefresh.');
    },
};
exports.LoadingHoc = React.createContext(defaultVal);
//# sourceMappingURL=LoadingHoc.js.map