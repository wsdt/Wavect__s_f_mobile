"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_storage_1 = require("@react-native-community/async-storage");
var react_native_cache_1 = require("react-native-cache");
var globalConfig_1 = require("../../../globalConfiguration/globalConfig");
var LoadingHoc_1 = require("../../views/components/system/HOCs/LoadingHoc");
var LoggingController_1 = require("../LoggingController/LoggingController");
var TAG = 'CacheController';
var cache = new react_native_cache_1.Cache({
    backend: async_storage_1.default,
    namespace: 'wavect_cache',
    policy: {
        maxEntries: 5,
    },
});
exports.onAppUpdate = new ((function () {
    function class_1() {
        var _this = this;
        this.onAppUpdate = function (oldVersion, newVersion) { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, exports.clearCache()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(TAG + ":onAppUpdate: Could not clear cache.");
                    case 3: return [2];
                }
            });
        }); };
    }
    return class_1;
}()))();
exports.putCache = function (key, val) {
    return new Promise(function (resolve, reject) {
        cache.setItem(key, val, function (err) {
            if (err) {
                LoggingController_1.logEvent(LoggingController_1.LogType.ERROR, TAG + ":putCache", "Cannot push element in cache -> '" + key + "':'" + val + "', err below: \n" + JSON.stringify(err));
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
};
exports.getCache = function (key) {
    return new Promise(function (resolve, reject) {
        cache.getItem(key, function (err, val) {
            if (err) {
                console.error(TAG + ":getCache: Cannot get element with key -> '" + key + "', err below: \n" + JSON.stringify(err));
                reject(err);
            }
            else {
                resolve(val);
            }
        });
    });
};
exports.deleteCache = function (key) {
    return new Promise(function (resolve, reject) {
        cache.removeItem(key, function (err) {
            if (err) {
                console.error(TAG + ":deleteCache: Cannot delete element with key -> '" + key + "', err below: \n" + JSON.stringify(err));
                reject(err);
            }
            resolve(true);
        });
    });
};
exports.sneakCache = function (key) {
    return new Promise(function (resolve, reject) {
        cache.peekItem(key, function (err, val) {
            if (err) {
                console.error(TAG + ":sneakCache: Cannot get element with key -> '" + key + "', err below: \n" + JSON.stringify(err));
                reject(err);
            }
            else {
                resolve(val);
            }
        });
    });
};
exports.getAllFromCache = function () {
    return new Promise(function (resolve, reject) {
        cache.getAll(function (err, entries) {
            if (err) {
                console.error(TAG + ":getAllFromCache: Cannot read cache, err below: \n" + JSON.stringify(err));
                reject(err);
            }
            else {
                resolve(entries);
            }
        });
    });
};
exports.clearCache = function () {
    return new Promise(function (resolve, reject) {
        cache.clearAll(function (err) {
            if (err) {
                console.error(TAG + ":clearCache: Could not clear cache, err below: \n" + JSON.stringify(err));
                return reject(err);
            }
            else {
                console.log(TAG + ":clearCache: Cleared cache successfully.");
                resolve(true);
            }
        });
    });
};
exports.cachedFetch = function (component, cacheKey, loadingContext, reload, fetchFunction) { return __awaiter(void 0, void 0, void 0, function () {
    var cachedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(reload || globalConfig_1.disableCache)) return [3, 1];
                fetchFunction();
                return [3, 3];
            case 1: return [4, exports.getCache(cacheKey)];
            case 2:
                cachedData = _a.sent();
                if (cachedData) {
                    LoggingController_1.logEvent(LoggingController_1.LogType.LOG, TAG + ":cachedFetch", 'Loading from cache');
                    component.setState(cachedData);
                    loadingContext.setLoading(LoadingHoc_1.LoadingStatus.DONE);
                }
                else {
                    fetchFunction();
                }
                _a.label = 3;
            case 3: return [2];
        }
    });
}); };
//# sourceMappingURL=CacheController.js.map