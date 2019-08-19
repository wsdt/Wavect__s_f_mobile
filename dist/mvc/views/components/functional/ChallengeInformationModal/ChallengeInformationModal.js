"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_fast_image_1 = require("react-native-fast-image");
var ChallengeInformationModal_css_1 = require("./ChallengeInformationModal.css");
exports.ChallengeInformationModal = function (props) {
    var _a = props.information, instruction = _a.instruction, intention = _a.intention, privacy = _a.privacy, misc = _a.misc;
    var isVisible = props.isVisible;
    return (<react_native_1.Modal presentationStyle={'fullScreen'} animationType='slide' transparent={false} visible={isVisible} onRequestClose={function () { return null; }}>
            <react_native_1.View>
                <react_native_1.View style={ChallengeInformationModal_css_1.default.containerStyle}>
                    <react_native_fast_image_1.default style={{ width: '100%', height: '100%' }} source={{
        priority: react_native_fast_image_1.default.priority.normal,
        uri: 'https://images.pexels.com/photos/2380451/pexels-photo-2380451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }} resizeMode={react_native_fast_image_1.default.resizeMode.cover}>
                        <react_native_1.Text style={ChallengeInformationModal_css_1.default.title}> Information </react_native_1.Text>

                        <react_native_1.View>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> Wie kann diese Challenge gelöst werden? </react_native_1.Text>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.blockText}> {instruction}</react_native_1.Text>
                        </react_native_1.View>
                        <react_native_1.View>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> Was soll diese Challenge bewirken?</react_native_1.Text>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.blockText}> {intention}</react_native_1.Text>
                        </react_native_1.View>
                        <react_native_1.View>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> Was passiert mit meinen Daten?</react_native_1.Text>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.blockText}> {privacy}</react_native_1.Text>
                        </react_native_1.View>
                        <react_native_1.View>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.headerText}> Ich will mehr wissen </react_native_1.Text>
                            <react_native_1.Text style={ChallengeInformationModal_css_1.default.blockText}> {misc} </react_native_1.Text>
                        </react_native_1.View>
                    </react_native_fast_image_1.default>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.Modal>);
};
//# sourceMappingURL=ChallengeInformationModal.js.map