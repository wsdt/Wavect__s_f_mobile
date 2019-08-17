"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LoggingController_1 = require("../../../../controllers/LoggingController/LoggingController");
var TAG = 'LoadingHoc';
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["LOADING"] = "loading";
    LoadingStatus["PREPARING"] = "preparing";
    LoadingStatus["DONE"] = "done";
    LoadingStatus["ERROR"] = "error";
    LoadingStatus["NOT_AVAILABLE"] = "not_available";
})(LoadingStatus = exports.LoadingStatus || (exports.LoadingStatus = {}));
var defaultVal = {
    setLoading: function (_) {
        LoggingController_1.logEvent(LoggingController_1.LogType.ERROR, TAG + ":setLoading", 'Calling default context!');
    },
    setRefresh: function (_) {
        LoggingController_1.logEvent(LoggingController_1.LogType.ERROR, TAG + ":setRefresh", 'Calling default context!');
    },
};
exports.LoadingHoc = React.createContext(defaultVal);
//# sourceMappingURL=LoadingHoc.js.map