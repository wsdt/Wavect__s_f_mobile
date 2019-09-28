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
var i18n_js_1 = require("i18n-js");
var lodash_memoize_1 = require("lodash.memoize");
var react_native_1 = require("react-native");
var RNLocalize = require("react-native-localize");
var TranslationBundler_1 = require("../../../assets/translations/TranslationBundler");
var CustomControlFunctions_1 = require("../../../globalConfiguration/developerProtection/CustomControlFunctions");
var developerProtection_1 = require("../../../globalConfiguration/developerProtection/developerProtection");
exports.t = lodash_memoize_1.default(function (key, config) {
    if (config === void 0) { config = {}; }
    return i18n_js_1.default.t(key, config);
}, function (key, config) {
    if (config === void 0) { config = {}; }
    return (config ? key + JSON.stringify(config) : key);
});
exports.setCurrentLanguageBundle = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, languageTag, isRTL;
    return __generator(this, function (_b) {
        _a = RNLocalize.findBestAvailableLanguage(Object.keys(TranslationBundler_1.default)) || TranslationBundler_1.fallbackLanguagePack, languageTag = _a.languageTag, isRTL = _a.isRTL;
        if (exports.t.cache.clear)
            exports.t.cache.clear();
        react_native_1.I18nManager.forceRTL(isRTL);
        i18n_js_1.default.translations = TranslationBundler_1.default;
        i18n_js_1.default.locale = languageTag;
        return [2];
    });
}); };
developerProtection_1.addCustomControlFunction(CustomControlFunctions_1.ControlFunctionType.DEBUG, function () {
    var translationBundleArr = Object.values(TranslationBundler_1.default);
    var keyArr = [];
    for (var _i = 0, translationBundleArr_1 = translationBundleArr; _i < translationBundleArr_1.length; _i++) {
        var langPack = translationBundleArr_1[_i];
        keyArr.push(JSON.stringify(Object.keys(langPack).sort()));
    }
    if (!keyArr.every(function (val, _, arr) { return val === arr[0]; })) {
        throw new Error('MultiLingualityController:addCustomControlFunction: Not all language-packs have the same keys. This means that you did not provide translations for some languages.');
    }
    return null;
});
//# sourceMappingURL=MultiLingualityController.js.map