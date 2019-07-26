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
            title: "Herausforderung",
            // tabBarIcon: <Icon name="tasks" type="font-awesome" />,
        },
    },
    [tabRoutes.SettingsScreen]: {
        screen: SettingsScreenRouter,
        navigationOptions: {
            title: "Einstellungen",
            // tabBarIcon: <Icon name="cog" type="font-awesome" />,
        },
    },
}
