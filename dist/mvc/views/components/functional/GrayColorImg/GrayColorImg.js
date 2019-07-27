"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_color_matrix_image_filters_1 = require("react-native-color-matrix-image-filters");
exports.GrayColorImg = function (props) {
    return props.isGrayscale ? <react_native_color_matrix_image_filters_1.Grayscale>{props.children}</react_native_color_matrix_image_filters_1.Grayscale> : <>{props.children}</>;
};
//# sourceMappingURL=GrayColorImg.js.map