"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var HomeScreenRouter_1 = require("./HomeScreenRouter/HomeScreenRouter");
var SettingsScreenRouter_1 = require("./SettingsScreenRouter/SettingsScreenRouter");
var TabRoutes_1 = require("./TabRoutes");
exports.routesConfig = (_a = {},
    _a[TabRoutes_1.tabRoutes.HomeScreen] = {
        screen: HomeScreenRouter_1.default,
        navigationOptions: {
            title: "Herausforderung",
        },
    },
    _a[TabRoutes_1.tabRoutes.SettingsScreen] = {
        screen: SettingsScreenRouter_1.default,
        navigationOptions: {
            title: "Einstellungen",
        },
    },
    _a);
//# sourceMappingURL=TabRouterNavigationConfigMap.js.map