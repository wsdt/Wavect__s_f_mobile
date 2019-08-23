"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var roundRadius = 5;
exports.BG_COLOR = "#008B8B";
var styles = react_native_1.StyleSheet.create({
    image: {
        height: "75%",
        width: "75%",
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: roundRadius,
        width: 47,
        height: 47,
    },
    touchableContainer: {
        alignSelf: "flex-end",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -5,
        marginRight: -3,
        borderRadius: roundRadius,
        width: 60,
        height: 60,
        backgroundColor: "#fff",
    },
});
exports.default = styles;
//# sourceMappingURL=ChallengeTypeIcon.css.js.map