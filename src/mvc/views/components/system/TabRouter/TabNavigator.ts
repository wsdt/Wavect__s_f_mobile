import {BottomTabNavigatorConfig, NavigationRouteConfigMap} from "react-navigation"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"


export const TabNavigator = (tabs: NavigationRouteConfigMap, conf?: BottomTabNavigatorConfig) => {

    return createMaterialBottomTabNavigator(
        tabs,
        conf
    )
}