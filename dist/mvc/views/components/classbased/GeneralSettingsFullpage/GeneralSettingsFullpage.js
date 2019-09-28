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
var react_native_elements_1 = require("react-native-elements");
var react_native_fast_image_1 = require("react-native-fast-image");
var react_native_version_number_1 = require("react-native-version-number");
var react_navigation_1 = require("react-navigation");
var _schema = require("../../../../../assets/translations/_schema.json");
var MultiLingualityController_1 = require("../../../../controllers/MultiLingualityController/MultiLingualityController");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var AppText_1 = require("../../functional/AppText/AppText");
var AppText_enum_1 = require("../../functional/AppText/AppText.enum");
var GeneralSettingsScreenRoutes_1 = require("../../system/TabRouter/GeneralSettingsScreenRouter/GeneralSettingsScreenRoutes");
var GeneralSettingsFullpage_css_1 = require("./GeneralSettingsFullpage.css");
var GeneralSettingsFullpage = (function (_super) {
    __extends(GeneralSettingsFullpage, _super);
    function GeneralSettingsFullpage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listItems = [
            {
                name: MultiLingualityController_1.t(_schema.settingsscreen.generalsettings.list.personal_settings),
                action: function () { return _this.props.navigation.navigate(GeneralSettingsScreenRoutes_1.routes.PersonalSettingsFullpage); },
            },
            {
                name: MultiLingualityController_1.t(_schema.settingsscreen.generalsettings.list.visit_hp),
                action: function () { return react_native_1.Linking.openURL('https://wavect.io/'); },
            },
            {
                name: MultiLingualityController_1.t(_schema.settingsscreen.generalsettings.list.privacy_policy),
                action: function () { return react_native_1.Linking.openURL('https:/wavect.io/privacy-policy/'); },
            },
        ];
        return _this;
    }
    GeneralSettingsFullpage.prototype.render = function () {
        return (<react_native_1.View style={GeneralSettingsFullpage_css_1.default.mainView}>
                <react_native_1.View style={GeneralSettingsFullpage_css_1.default.imageView}>
                    <react_native_fast_image_1.default source={require('../../../../../assets/img/logo_w.png')} style={[GeneralSettingsFullpage_css_1.default.image, GlobalStyles_css_1.default.radius]}/>

                    <AppText_1.AppText font={AppText_enum_1.FontType.STANDARD_BOLD} style={{ fontSize: 25 }}>
                        Wavect
                    </AppText_1.AppText>
                </react_native_1.View>

                <react_native_1.View style={GeneralSettingsFullpage_css_1.default.navigationView}>
                    {this.listItems.map(function (item) { return (<react_native_1.View style={GeneralSettingsFullpage_css_1.default.row} key={item.name}>
                            <react_native_elements_1.Icon name={'angle-double-right'} type={'font-awesome'}/>
                            <react_native_1.TouchableOpacity style={GeneralSettingsFullpage_css_1.default.navItem} key={item.name} onPress={item.action}>
                                <AppText_1.AppText style={GeneralSettingsFullpage_css_1.default.itemFont}>{item.name}</AppText_1.AppText>
                            </react_native_1.TouchableOpacity>
                        </react_native_1.View>); })}
                </react_native_1.View>
                <AppText_1.AppText style={GeneralSettingsFullpage_css_1.default.versionFont}>v. {react_native_version_number_1.default.appVersion}</AppText_1.AppText>
            </react_native_1.View>);
    };
    return GeneralSettingsFullpage;
}(React.PureComponent));
exports.GeneralSettingsFullpage = GeneralSettingsFullpage;
exports.default = react_navigation_1.withNavigation(GeneralSettingsFullpage);
//# sourceMappingURL=GeneralSettingsFullpage.js.map