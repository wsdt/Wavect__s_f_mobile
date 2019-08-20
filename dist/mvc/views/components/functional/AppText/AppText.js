"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
exports.AppText = function (styles, font, props) {
    return (<react_native_1.View>
            <react_native_1.Text style={[styles]}> {props.children}</react_native_1.Text>
        </react_native_1.View>);
};
//# sourceMappingURL=AppText.js.map