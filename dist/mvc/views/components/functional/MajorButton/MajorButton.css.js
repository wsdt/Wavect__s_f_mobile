"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var globalConstants_css_1 = require("../../../../../globalConfiguration/globalConstants.css");
var AppText_enum_1 = require("../AppText/AppText.enum");
var styles = react_native_1.StyleSheet.create({
    primaryBtnContainer: {
        backgroundColor: '#f3f3ee',
        borderRadius: 3,
        flex: 1.5,
        margin: 5,
    },
    highlightedBtnContainer: {
        backgroundColor: globalConstants_css_1.secondaryBackgroundColor,
        borderRadius: 3,
        flex: 1.5,
        margin: 5,
    },
    secondaryBtnContainer: {
        flex: 1,
        margin: 5,
    },
    btnTitleStandard: {
        color: '#000',
        fontSize: 20,
        fontFamily: AppText_enum_1.FontType.BOLD,
        padding: 10,
    },
    btnStyleWithBorder: {
        borderColor: '#000',
        height: 60,
    },
    btnTitleHighlighted: {
        color: globalConstants_css_1.secondaryColor,
        fontFamily: AppText_enum_1.FontType.BOLD,
        fontSize: 20,
        padding: 10,
    },
});
exports.default = styles;
//# sourceMappingURL=MajorButton.css.js.map