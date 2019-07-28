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
            title: "Herausforderung",
            tabBarIcon: <Image source={ICO_TAB_CHALLENGE} width={30} height={30} />,
        },
    },
    [tabRoutes.SettingsScreen]: {
        screen: SettingsScreenRouter,
        navigationOptions: {
            title: "Einstellungen",
            tabBarIcon: <Image source={ICO_TAB_SETTINGS} width={30} height={30} />,
        },
    },
}
