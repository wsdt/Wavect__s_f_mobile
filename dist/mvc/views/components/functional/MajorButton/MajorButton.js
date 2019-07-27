"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var MajorButton_css_1 = require("./MajorButton.css");
exports.MajorButton = function (props) {
    var containerStyle;
    var titleStyle = MajorButton_css_1.default.btnTitleStandard;
    switch (props.btnType) {
        case MajorBtnType.PRIMARY:
            containerStyle = MajorButton_css_1.default.primaryBtnContainer;
            break;
        case MajorBtnType.SECONDARY:
            containerStyle = MajorButton_css_1.default.secondaryBtnContainer;
            break;
        case MajorBtnType.HIGHLIGHTED:
            containerStyle = MajorButton_css_1.default.highlightedBtnContainer;
            titleStyle = MajorButton_css_1.default.btnTitleHighlighted;
            break;
    }
    var title = props.title, onPress = props.onPress, icon = props.icon, onLongPress = props.onLongPress;
    return (<react_native_1.View style={containerStyle}>
            <react_native_elements_1.Button title={title} type="outline" titleStyle={titleStyle} buttonStyle={MajorButton_css_1.default.btnStyleWithBorder} onPress={onPress} onLongPress={onLongPress} loading={props.isLoading} icon={icon ? <react_native_elements_1.Icon name={icon} type="font-awesome"/> : undefined}/>
        </react_native_1.View>);
};
var MajorBtnType;
(function (MajorBtnType) {
    MajorBtnType[MajorBtnType["PRIMARY"] = 0] = "PRIMARY";
    MajorBtnType[MajorBtnType["SECONDARY"] = 1] = "SECONDARY";
    MajorBtnType[MajorBtnType["HIGHLIGHTED"] = 2] = "HIGHLIGHTED";
})(MajorBtnType = exports.MajorBtnType || (exports.MajorBtnType = {}));
//# sourceMappingURL=MajorButton.js.map