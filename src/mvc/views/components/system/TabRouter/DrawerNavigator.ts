import {
    BottomTabNavigatorConfig,
    createDrawerNavigator,
    DrawerNavigatorConfig,
    NavigationRouteConfigMap
} from "react-navigation"
import {TabNavigator} from "./TabNavigator"

export const DrawerNavigator = (tabs: NavigationRouteConfigMap, tabConf?: BottomTabNavigatorConfig, conf?: DrawerNavigatorConfig) => {
    return createDrawerNavigator(
        {
            Dashboard: {
                screen: TabNavigator(tabs, tabConf)
            },
        },
        conf,
    )
}