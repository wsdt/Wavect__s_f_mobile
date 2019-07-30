import * as React from "react"
import { Image } from "react-native"
import { NavigationRouteConfigMap } from "react-navigation"
import { ICO_TAB_CHALLENGE, ICO_TAB_SETTINGS } from "../../../../../assets/AssetIndex"
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
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require("../../../../../assets/img/icons/ic_tab_challenges.png")}
                    style={{ width: 20, height: 20, tintColor: "white" }}
                />
            ),
            title: "",
        },
    },
    [tabRoutes.SettingsScreen]: {
        tabBarOptions: {
            showIcon: true,
        },
        screen: SettingsScreenRouter,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require("../../../../../assets/img/icons/ic_tab_settings.png")}
                    style={{ width: 20, height: 20, tintColor: "white" }}
                />
            ),
            title: "",
        },
    },
}
