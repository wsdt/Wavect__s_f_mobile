"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var globalConfig_1 = require("../globalConfig");
var CustomControlFunctions_1 = require("./CustomControlFunctions");
var TAG = 'DeveloperProtection';
var customControlFunctions = (_a = {},
    _a[CustomControlFunctions_1.ControlFunctionType.ALL] = [],
    _a[CustomControlFunctions_1.ControlFunctionType.DEBUG] = [],
    _a[CustomControlFunctions_1.ControlFunctionType.RELEASE] = [],
    _a);
exports.addCustomControlFunction = function (controlFunctionType, func) {
    customControlFunctions[controlFunctionType].push(func);
};
var evaluateCustomControlFunctions = function (controlFunctionType) {
    for (var _i = 0, _a = customControlFunctions[controlFunctionType]; _i < _a.length; _i++) {
        var func = _a[_i];
        var err = func();
        if (err)
            throw err;
    }
};
exports.watchConfiguration = function () {
    if (__DEV__) {
        evaluateCustomControlFunctions(CustomControlFunctions_1.ControlFunctionType.DEBUG);
    }
    else {
        if (globalConfig_1.useLocalBackend)
            throw new Error(TAG + ": You must not compile a release app with a local backend!");
        if (globalConfig_1.disableCache)
            throw new Error(TAG + ": You must not disable cache for a release build!");
        if (globalConfig_1.useReactotron)
            throw new Error(TAG + ": You must not use Reactotron in a release build!");
        evaluateCustomControlFunctions(CustomControlFunctions_1.ControlFunctionType.RELEASE);
    }
    if (globalConfig_1.BACKEND_URL.slice(-1) === '/')
        throw new Error(TAG + ": All api calls assume that the backend-url has NO backslash at the end!");
    evaluateCustomControlFunctions(CustomControlFunctions_1.ControlFunctionType.ALL);
};
//# sourceMappingURL=developerProtection.js.map