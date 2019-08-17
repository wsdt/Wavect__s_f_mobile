"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var Fade_1 = require("../../classbased/_animations/Fade/Fade");
exports.LoadingIndicator = function () {
    return (<Fade_1.Fade visible={true} fadeDuration={300} containerStyle={GlobalStyles_css_1.default.absoluteCenter}>
            <react_native_1.ActivityIndicator size="large" color="#000000"/>
        </Fade_1.Fade>);
};
//# sourceMappingURL=LoadingIndicator.js.map