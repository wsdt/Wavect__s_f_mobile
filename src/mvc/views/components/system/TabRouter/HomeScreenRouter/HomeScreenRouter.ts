import { createStackNavigator } from "react-navigation"
import { routesConfig } from "./HomeScreenRouterConfigMap"
import { routerOptions } from "./HomeScreenRouterOptions"

/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
const HomeScreenRouter = createStackNavigator(routesConfig, routerOptions)

export default HomeScreenRouter
