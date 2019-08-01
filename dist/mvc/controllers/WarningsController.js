"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.functionalityNotAvailable = function (msg) {
    react_native_1.Alert.alert('Nicht verfügbar', msg, [{ text: 'Ok' }], { cancelable: true });
};
exports.noInternetAvailable = function () {
    react_native_1.Alert.alert('Keine Verbindung', 'Server nicht erreichbar. Hast du eine Internetverbindung?', [{ text: 'Ok' }], { cancelable: true });
};
//# sourceMappingURL=WarningsController.js.map