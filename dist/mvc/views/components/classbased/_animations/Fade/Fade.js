"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var react_native_1 = require("react-native");
var Fade = (function (_super) {
    __extends(Fade, _super);
    function Fade(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            opacity: new react_native_1.Animated.Value(0),
        };
        react_native_1.Animated.timing(_this.state.opacity, {
            toValue: _this.props.visible ? 1 : 0,
            duration: _this.props.fadeDuration,
        }).start();
        return _this;
    }
    Fade.prototype.render = function () {
        var _a = this.props, visible = _a.visible, containerStyle = _a.containerStyle, children = _a.children, rest = __rest(_a, ["visible", "containerStyle", "children"]);
        return (<react_native_1.Animated.View style={[containerStyle, { opacity: this.state.opacity }]} {...rest}>
                {children}
            </react_native_1.Animated.View>);
    };
    return Fade;
}(react_1.PureComponent));
exports.Fade = Fade;
//# sourceMappingURL=Fade.js.map