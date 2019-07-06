"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var parseScss_1 = require("../../../../controllers/parseScss");
var styles = require("./TestFunctionalComponent.scss");
/** This test component shows a clickable social icon */
exports.TestFunctionalComponent = function (props) {
    return (<react_native_1.TouchableOpacity onPress={function () { return props.authCallback; }}>
            <react_native_elements_1.SocialIcon type={props.socialType} button light style={parseScss_1.default(styles.gridElem)}/>
        </react_native_1.TouchableOpacity>);
};
