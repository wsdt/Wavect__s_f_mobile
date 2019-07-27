"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var TabRouterNavigationConfigMap_1 = require("./TabRouterNavigationConfigMap");
var TabRouterNavigationOptions_1 = require("./TabRouterNavigationOptions");
var AppNavigator = react_navigation_1.createMaterialTopTabNavigator(TabRouterNavigationConfigMap_1.routesConfig, TabRouterNavigationOptions_1.routerOptions);
exports.default = AppNavigator;
//# sourceMappingURL=TabRouter.js.map