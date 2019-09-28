"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var GeneralSettingsScreenRouter_1 = require("./GeneralSettingsScreenRouter/GeneralSettingsScreenRouter");
var HomeScreenRouter_1 = require("./HomeScreenRouter/HomeScreenRouter");
var TabRoutes_1 = require("./TabRoutes");
exports.routesConfig = (_a = {},
    _a[TabRoutes_1.tabRoutes.HomeScreen] = {
        screen: HomeScreenRouter_1.default,
        navigationOptions: {
            tabBarIcon: function () { return (<react_native_1.Image source={require('../../../../../assets/img/icons/ic_tab_challenges.png')} style={{ width: 20, height: 20, tintColor: 'black' }}/>); },
        },
    },
    _a[TabRoutes_1.tabRoutes.SettingsScreen] = {
        screen: GeneralSettingsScreenRouter_1.default,
        navigationOptions: {
            tabBarIcon: function () { return (<react_native_1.Image source={require('../../../../../assets/img/icons/ic_tab_settings.png')} style={{ width: 20, height: 20, tintColor: 'black' }}/>); },
        },
    },
    _a);
//# sourceMappingURL=TabRouterNavigationConfigMap.js.map