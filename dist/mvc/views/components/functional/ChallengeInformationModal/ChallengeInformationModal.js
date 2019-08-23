"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var react_native_modal_1 = require("react-native-modal");
var AppText_1 = require("../AppText/AppText");
var ChallengeInformationModal_css_1 = require("./ChallengeInformationModal.css");
exports.ChallengeInformationModal = function (props) {
    var isVisible = props.isVisible;
    var instruction = props.information.instruction;
    return (<react_native_1.View>
            <react_native_modal_1.default isVisible={isVisible} propagateSwipe={true}>
                <react_native_1.View style={ChallengeInformationModal_css_1.default.innerContent}>
                    <react_native_1.View style={ChallengeInformationModal_css_1.default.closeIcon}>
                        <react_native_elements_1.Image source={{ uri: "https://cdn.pixabay.com/photo/2014/09/26/10/45/delete-462216_960_720.png" }} style={ChallengeInformationModal_css_1.default.image}/>
                    </react_native_1.View>

                    <react_native_1.View style={ChallengeInformationModal_css_1.default.centeredInnerContent}>
                        <react_native_elements_1.Image source={{ uri: "https://cdn.icon-icons.com/icons2/67/PNG/512/info_13213.png" }} style={ChallengeInformationModal_css_1.default.image}/>
                        <AppText_1.AppText style={ChallengeInformationModal_css_1.default.centeredText}> {instruction} </AppText_1.AppText>
                        <react_native_1.View style={{
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "90%",
        margin: 15,
    }}/>

                        <react_native_elements_1.Image source={{ uri: "https://icon-library.net/images/gift-png-icon/gift-png-icon-2.jpg" }} style={ChallengeInformationModal_css_1.default.image}/>
                        <AppText_1.AppText style={ChallengeInformationModal_css_1.default.centeredText}> Unter allen gelösten Challenges wird ein € 5,00 Gutschein von Amazon verlost.</AppText_1.AppText>
                        <AppText_1.AppText style={ChallengeInformationModal_css_1.default.ending}> Viel Glück! </AppText_1.AppText>
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_modal_1.default>
        </react_native_1.View>);
};
//# sourceMappingURL=ChallengeInformationModal.js.map