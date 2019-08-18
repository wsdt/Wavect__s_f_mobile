"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var radius = GlobalStyles_css_1.default.radius.borderRadius;
var styles = react_native_1.StyleSheet.create({
    topLeftCompany: {
        alignSelf: "flex-start",
        position: "absolute",
        flex: 1,
        margin: 5,
        marginLeft: 15,
        marginTop: 15,
        borderRadius: radius,
    },
    image: {
        width: 75,
        height: 50,
        resizeMode: "contain",
    },
});
exports.default = styles;
//# sourceMappingURL=CompanyLogo.css.js.map