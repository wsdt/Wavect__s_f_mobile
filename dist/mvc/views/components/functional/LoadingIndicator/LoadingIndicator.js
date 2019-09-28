"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
exports.LoadingIndicator = function () {
    return (<react_native_1.View style={GlobalStyles_css_1.default.absoluteCenter}>
            <react_native_1.ActivityIndicator size="large" color="#000000"/>
        </react_native_1.View>);
};
//# sourceMappingURL=LoadingIndicator.js.map