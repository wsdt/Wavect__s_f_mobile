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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_fast_image_1 = require("react-native-fast-image");
var react_navigation_1 = require("react-navigation");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var AppText_1 = require("../../functional/AppText/AppText");
var AppText_enum_1 = require("../../functional/AppText/AppText.enum");
var Utils_1 = require("../../functional/Utils/Utils");
var HomeRoutes_1 = require("../../system/TabRouter/HomeScreenRouter/HomeRoutes");
var GeneralSettingsFullpage_css_1 = require("./GeneralSettingsFullpage.css");
var GeneralSettingsFullpage = (function (_super) {
    __extends(GeneralSettingsFullpage, _super);
    function GeneralSettingsFullpage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralSettingsFullpage.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={GeneralSettingsFullpage_css_1.default.mainView}>
                <react_native_1.View style={GeneralSettingsFullpage_css_1.default.imageView}>
                    <react_native_fast_image_1.default source={require("../../../../../assets/img/logo_w.png")} style={[GeneralSettingsFullpage_css_1.default.image, GlobalStyles_css_1.default.radius]}/>

                    <AppText_1.AppText style={{ fontSize: 10 }}> v.0.5</AppText_1.AppText>
                    <AppText_1.AppText font={AppText_enum_1.FontType.STANDARD_BOLD} style={{ fontSize: 25 }}>
                        {" "}
                        Wavect{" "}
                    </AppText_1.AppText>
                </react_native_1.View>

                <react_native_1.View style={GeneralSettingsFullpage_css_1.default.navigationView}>
                    <AppText_1.AppText style={GeneralSettingsFullpage_css_1.default.navText} onPress={function () { return _this.props.navigation.navigate(HomeRoutes_1.routes.PersonalSettingsFullpage); }}>
                        {" "}
                        Persönliche Daten hinterlegen{" "}
                    </AppText_1.AppText>
                    <AppText_1.AppText style={GeneralSettingsFullpage_css_1.default.navText} onPress={function () { return Utils_1.notImplementedYet(); }}>
                        {" "}
                        Idee für Challenge einreichen{" "}
                    </AppText_1.AppText>
                    <AppText_1.AppText style={GeneralSettingsFullpage_css_1.default.navText} onPress={function () { return react_native_1.Linking.openURL("https://wordpress.dev.wavect.io/"); }}>
                        {" "}
                        Homepage besuchen{" "}
                    </AppText_1.AppText>
                    <AppText_1.AppText style={GeneralSettingsFullpage_css_1.default.navText} onPress={function () { return react_native_1.Linking.openURL("https://wordpress.dev.wavect.io/privacy-policy/"); }}>
                        {" "}
                        Teilnahmebedingungen{" "}
                    </AppText_1.AppText>
                    <AppText_1.AppText style={GeneralSettingsFullpage_css_1.default.navText} onPress={function () { return react_native_1.Linking.openURL("https://wordpress.dev.wavect.io/privacy-policy/"); }}>
                        {" "}
                        AGB{" "}
                    </AppText_1.AppText>
                </react_native_1.View>
            </react_native_1.View>);
    };
    return GeneralSettingsFullpage;
}(React.PureComponent));
exports.GeneralSettingsFullpage = GeneralSettingsFullpage;
exports.default = react_navigation_1.withNavigation(GeneralSettingsFullpage);
//# sourceMappingURL=GeneralSettingsFullpage.js.map