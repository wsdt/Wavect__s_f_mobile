"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var RoundedButton_1 = require("../../../functional/RoundedButton/RoundedButton");
var GeneralSettingsScreenRoutes_1 = require("./GeneralSettingsScreenRoutes");
exports.routerOptions = {
    initialRouteName: GeneralSettingsScreenRoutes_1.routes.SettingsScreen,
    defaultNavigationOptions: {
        headerRight: (<RoundedButton_1.RoundedButton containerStyle={{ marginRight: 5 }} title="Feedback" press={function () { return react_native_1.Linking.openURL("mailto:support@bekind.com?subject=BeKind-Feedback&body=Was könnten wir verbessern?"); }}/>),
        headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            shadowRadius: 0,
        },
        headerTintColor: "#111",
        headerTitleStyle: {
            fontWeight: "bold",
        },
    },
};
//# sourceMappingURL=GeneralSettingsScreenRouterOptions.js.map