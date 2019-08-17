"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var _schema = require("../../../../../../assets/translations/_schema.json");
var MultiLingualityController_1 = require("../../../../../controllers/MultiLingualityController/MultiLingualityController");
var SettingsScreen_1 = require("../../../../pages/SettingsScreen/SettingsScreen");
var SettingsRoutes_1 = require("./SettingsRoutes");
var s = _schema.system.tabrouter.stackrouters.settingsscreen;
exports.routesConfig = (_a = {},
    _a[SettingsRoutes_1.routes.SettingsScreen] = {
        screen: SettingsScreen_1.SettingsScreen,
        navigationOptions: function () { return ({
            title: MultiLingualityController_1.t(s.settings.title),
        }); },
    },
    _a);
//# sourceMappingURL=SettingsScreenRouterConfigMap.js.map