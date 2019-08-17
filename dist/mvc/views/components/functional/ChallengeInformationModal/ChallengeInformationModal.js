"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var React = require("react");
var ChallengeInformationModal_css_1 = require("./ChallengeInformationModal.css");
exports.ChallengeInformationModal = function (props) {
    var _a = props.information, instruction = _a.instruction, intention = _a.intention, privacy = _a.privacy, misc = _a.misc;
    var isVisible = props.isVisible;
    return (<react_native_1.Modal animationType="fade" transparent={false} visible={isVisible} onRequestClose={function () { }}>
            <react_native_1.View style={{ marginTop: 22 }}>
                <react_native_1.View style={ChallengeInformationModal_css_1.default.containerStyle}>
                    <react_native_1.View>
                        <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> :-) </react_native_1.Text>
                        <react_native_1.Text> {instruction}</react_native_1.Text>
                    </react_native_1.View>
                    <react_native_1.View>
                        <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> :-)</react_native_1.Text>
                        <react_native_1.Text> {intention}</react_native_1.Text>
                    </react_native_1.View>
                    <react_native_1.View>
                        <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> :-)</react_native_1.Text>
                        <react_native_1.Text> {privacy}</react_native_1.Text>
                    </react_native_1.View>
                    <react_native_1.View>
                        <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> :-)</react_native_1.Text>
                        <react_native_1.Text> {misc} </react_native_1.Text>
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.Modal>);
};
//# sourceMappingURL=ChallengeInformationModal.js.map