"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var radius = GlobalStyles_css_1.default.radius.borderRadius;
var styles = react_native_1.StyleSheet.create({
    mainComponent: {
        height: "100%",
        justifyContent: "flex-end",
    },
    btnStyleTransparent: {
        borderColor: "transparent",
    },
    btnStyleWithBorder: {
        borderColor: "#000",
        height: 60,
    },
    btnTitleStandard: {
        color: "#000",
        fontSize: 20,
        padding: 10,
    },
    btnTitleWhiteColor: {
        color: "#fff",
        fontSize: 20,
        padding: 10,
    },
    btnContainer: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        margin: 5,
    },
    headline: {
        fontSize: 32,
        fontWeight: "bold",
        margin: 10,
    },
    subline: {
        fontSize: 20,
        margin: 5,
    },
    bottomActionContainer: {
        height: 200,
        backgroundColor: "#ccc",
        borderRadius: radius,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        justifyContent: "flex-end",
        opacity: 0.7,
    },
});
exports.default = styles;
//# sourceMappingURL=ChallengeLayerBar.css.js.map