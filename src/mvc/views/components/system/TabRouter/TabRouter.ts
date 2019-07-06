import { createBottomTabNavigator } from "react-navigation"
import { routesConfig } from "./TabRouterNavigationConfigMap"
import { routerOptions } from "./TabRouterNavigationOptions"

/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
const AppNavigator = createBottomTabNavigator(routesConfig, routerOptions)

export default AppNavigator
