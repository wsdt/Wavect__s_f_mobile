"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalConfig = require("../../../../../globalConfiguration/globalConfig");
exports.routerOptions = {
    initialRouteName: globalConfig.START_PAGE,
    backBehavior: "history",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: "bottom",
    lazy: true,
    tabBarOptions: {
        activeTintColor: "#000",
        inactiveTintColor: "#888",
        style: { backgroundColor: "#fff" },
        indicatorStyle: { backgroundColor: "#000" },
        allowFontScaling: true,
    },
    defaultNavigationOptions: {},
};
//# sourceMappingURL=TabRouterNavigationOptions.js.map