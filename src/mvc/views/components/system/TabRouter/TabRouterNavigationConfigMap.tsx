import * as React from "react"
import { Icon } from "react-native-elements"
import { NavigationRouteConfigMap } from "react-navigation"
import HomeScreenRouter from "./HomeScreenRouter/HomeScreenRouter"
import SettingsScreenRouter from "./SettingsScreenRouter/SettingsScreenRouter"
import { tabRoutes } from "./TabRoutes"

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
export const routesConfig: NavigationRouteConfigMap = {
    [tabRoutes.HomeScreen]: {
        screen: HomeScreenRouter, // which component to load
        navigationOptions: {
            title: "Challenge",
            tabBarIcon: <Icon name="bell" type="font-awesome" />,
        },
    },
    [tabRoutes.SettingsScreen]: {
        screen: SettingsScreenRouter,
        navigationOptions: {
            title: "Settings",
            tabBarIcon: <Icon name="cog" type="font-awesome" />,
        },
    },
}
