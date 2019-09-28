"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var MultiLingualityController_1 = require("../MultiLingualityController/MultiLingualityController");
var WarningsController_translations_1 = require("./WarningsController.translations");
exports.functionalityNotAvailable = function (msg) {
    react_native_1.Alert.alert('Nicht verfügbar', msg, [{ text: 'Ok' }], { cancelable: true });
};
exports.noInternetAvailable = function () {
    react_native_1.Alert.alert(MultiLingualityController_1.t(WarningsController_translations_1.default.dialog.no_internet.title), MultiLingualityController_1.t(WarningsController_translations_1.default.dialog.no_internet.msg), [{ text: MultiLingualityController_1.t(WarningsController_translations_1.default.dialog.no_internet.btn_ok) }], { cancelable: true });
};
//# sourceMappingURL=WarningsController.js.map