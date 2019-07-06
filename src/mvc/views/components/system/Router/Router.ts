import { createStackNavigator, StackNavigatorConfig } from "react-navigation"
import * as globalConfig from "../../../../../globalConfiguration/globalConfig"
import { routesConfig } from "./RouterNavigationConfigMap"
import { defaultNavigationOptions } from "./RouterNavigationOptions"

/** You can define additional options for our router here */
const routerOptions: StackNavigatorConfig = {
    defaultNavigationOptions,
    initialRouteName: globalConfig.START_PAGE, // Start page
    initialRouteParams: {},
}

/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
const AppNavigator = createStackNavigator(routesConfig, routerOptions)

export default AppNavigator
