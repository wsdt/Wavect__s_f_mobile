"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var AppText_enum_1 = require("./AppText.enum");
exports.AppText = function (props) {
    var styleSheet = react_native_1.StyleSheet.create({
        standard: {
            fontFamily: AppText_enum_1.FontType.STANDARD,
            fontSize: 20,
        },
        custom: {
            fontFamily: props.font,
            fontSize: 23,
        },
    });
    var textStyle = props.font ? styleSheet.custom : styleSheet.standard;
    return (<react_native_1.Text style={[textStyle, props.style]} onPress={props.onPress}>
            {props.children}
        </react_native_1.Text>);
};
//# sourceMappingURL=AppText.js.map