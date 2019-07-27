"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
exports.TouchableIcon = function (props) {
    var icon = props.icon, onPress = props.onPress;
    return (<react_native_1.TouchableOpacity onPress={onPress}>
            <react_native_elements_1.Icon name={icon} type="font-awesome" color="white"/>
        </react_native_1.TouchableOpacity>);
};
//# sourceMappingURL=TouchableIcon.js.map