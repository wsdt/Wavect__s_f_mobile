"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var _schema = require("../../../../../../assets/translations/_schema.json");
var MultiLingualityController_1 = require("../../../../../controllers/MultiLingualityController/MultiLingualityController");
var HomeScreen_1 = require("../../../../pages/HomeScreen/HomeScreen");
var PersonalSettingsFullpage_1 = require("../../../classbased/PersonalSettingsFullpage/PersonalSettingsFullpage");
var SponsorFullpage_1 = require("../../../classbased/SponsorFullpage/SponsorFullpage");
var TabRouter_css_1 = require("./../TabRouter.css");
var HomeRoutes_1 = require("./HomeRoutes");
var s = _schema.system.tabrouter.stackrouters.homescreen;
exports.routesConfig = (_a = {},
    _a[HomeRoutes_1.routes.HomeScreen] = {
        screen: HomeScreen_1.HomeScreen,
        navigationOptions: function () { return ({
            title: MultiLingualityController_1.t(s.home.title),
            headerTitleStyle: TabRouter_css_1.default.headerTitleStyle,
        }); },
    },
    _a[HomeRoutes_1.routes.SponsorFullpage] = {
        screen: SponsorFullpage_1.default,
        navigationOptions: function () { return ({
            title: MultiLingualityController_1.t(s.sponsor.title),
        }); },
    },
    _a[HomeRoutes_1.routes.PersonalSettingsFullpage] = {
        screen: PersonalSettingsFullpage_1.PersonalSettingsFullpage,
        navigationOptions: function () { return ({
            title: MultiLingualityController_1.t(s.sponsor.title),
        }); },
    },
    _a);
//# sourceMappingURL=HomeScreenRouterConfigMap.js.map