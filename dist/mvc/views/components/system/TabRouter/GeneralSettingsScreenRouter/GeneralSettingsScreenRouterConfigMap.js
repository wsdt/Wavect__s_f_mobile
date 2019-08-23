"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var _schema = require("../../../../../../assets/translations/_schema.json");
var MultiLingualityController_1 = require("../../../../../controllers/MultiLingualityController/MultiLingualityController");
var TabRouter_css_1 = require("../TabRouter.css");
var GeneralSettingsScreenRoutes_1 = require("./GeneralSettingsScreenRoutes");
var GeneralSettingsFullpage_1 = require("../../../classbased/GeneralSettingsFullpage/GeneralSettingsFullpage");
var s = _schema.system.tabrouter.stackrouters.settingsscreen;
exports.routesConfig = (_a = {},
    _a[GeneralSettingsScreenRoutes_1.routes.SettingsScreen] = {
        screen: GeneralSettingsFullpage_1.GeneralSettingsFullpage,
        navigationOptions: function () { return ({
            title: MultiLingualityController_1.t(s.settings.title),
            headerTitleStyle: TabRouter_css_1.default.headerTitleStyle,
        }); },
    },
    _a);
//# sourceMappingURL=GeneralSettingsScreenRouterConfigMap.js.map