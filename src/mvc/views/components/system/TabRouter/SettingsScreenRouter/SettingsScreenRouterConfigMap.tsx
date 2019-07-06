import { NavigationRouteConfigMap } from "react-navigation"
import { SettingsScreen } from "../../../../pages/SettingsScreen/SettingsScreen"
import { routes } from "./SettingsRoutes"

export const routesConfig: NavigationRouteConfigMap = {
    [routes.SettingsScreen]: {
        screen: SettingsScreen, // which component to load
        navigationOptions: () => ({
            title: "Einstellungen", // which title to show in navbar
        }),
    },
}
