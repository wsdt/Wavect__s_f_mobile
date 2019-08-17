"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.GREY = '#9b9b9b';
exports.FULL_WIDTH = react_native_1.Dimensions.get('window').width;
exports.FULL_HEIGHT = react_native_1.Dimensions.get('window').height;
exports.BOTTOM_TABBAR_MARGIN = 100;
var globalStyles = react_native_1.StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        width: '100%',
    },
    absoluteCenter: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageContainer: {
        flex: 1,
        height: exports.FULL_HEIGHT - exports.BOTTOM_TABBAR_MARGIN,
        margin: 5,
        justifyContent: 'flex-start',
    },
    tooltipText: {
        color: '#fff',
    },
    fullSize: {
        height: '100%',
        width: '100%',
    },
    radius: {
        borderRadius: 15,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
exports.default = globalStyles;
//# sourceMappingURL=GlobalStyles.css.js.map