"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var globalConfig_1 = require("../../../../../../globalConfiguration/globalConfig");
var RoundedButton_1 = require("../../../functional/RoundedButton/RoundedButton");
exports.routerOptions = {
    initialRouteName: globalConfig_1.START_PAGE,
    defaultNavigationOptions: {
        headerRight: (<RoundedButton_1.RoundedButton containerStyle={{ marginRight: 5 }} title="Feedback" press={function () { return react_native_1.Linking.openURL('mailto:support@wavect.io?subject=Wavect-Feedback&body=Was könnten wir verbessern?'); }}/>),
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
            shadowRadius: 0,
        },
        headerTintColor: '#111',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
};
//# sourceMappingURL=HomeScreenRouterOptions.js.map