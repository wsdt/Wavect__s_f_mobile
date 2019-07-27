"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var ChallengeCategory_1 = require("../../../../models/ChallengeCategory");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var ChallengeTypeIcon_css_1 = require("./ChallengeTypeIcon.css");
exports.ChallengeTypeIcon = function (props) {
    var currColor = getColor(props.isGrayscale);
    return (<react_native_1.TouchableOpacity style={ChallengeTypeIcon_css_1.default.touchableContainer}>
            <react_native_elements_1.Tooltip popover={<react_native_elements_1.Text style={GlobalStyles_css_1.default.tooltipText}>{ChallengeCategory_1.CHALLENGE_CATEGORIES[props.type].descr}</react_native_elements_1.Text>} backgroundColor={currColor} height={135}>
                <react_native_elements_1.Image source={ChallengeCategory_1.CHALLENGE_CATEGORIES[props.type].icon} containerStyle={[ChallengeTypeIcon_css_1.default.imageContainer, { backgroundColor: currColor }]} style={ChallengeTypeIcon_css_1.default.image}/>
            </react_native_elements_1.Tooltip>
        </react_native_1.TouchableOpacity>);
};
var getColor = function (isGrayscale) {
    return isGrayscale ? GlobalStyles_css_1.GREY : ChallengeTypeIcon_css_1.BG_COLOR;
};
//# sourceMappingURL=ChallengeTypeIcon.js.map