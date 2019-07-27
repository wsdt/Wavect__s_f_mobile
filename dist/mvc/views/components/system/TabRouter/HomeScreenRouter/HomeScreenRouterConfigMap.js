"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var HomeScreen_1 = require("../../../../pages/HomeScreen/HomeScreen");
var SponsorFullpage_1 = require("../../../stateful/SponsorFullpage/SponsorFullpage");
var HomeRoutes_1 = require("./HomeRoutes");
exports.routesConfig = (_a = {},
    _a[HomeRoutes_1.routes.HomeScreen] = {
        screen: HomeScreen_1.HomeScreen,
        navigationOptions: function () { return ({
            title: "Challenge",
        }); },
    },
    _a[HomeRoutes_1.routes.SponsorFullpage] = {
        screen: SponsorFullpage_1.default,
        navigationOptions: function () { return ({
            title: "Sponsor",
        }); },
    },
    _a);
//# sourceMappingURL=HomeScreenRouterConfigMap.js.map