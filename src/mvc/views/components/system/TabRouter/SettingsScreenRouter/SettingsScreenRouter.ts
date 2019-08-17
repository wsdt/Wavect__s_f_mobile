import { createStackNavigator } from "react-navigation"
import { routesConfig } from "./SettingsScreenRouterConfigMap"
import { routerOptions } from "./SettingsScreenRouterOptions"

/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
const SettingsScreenRouter = createStackNavigator(routesConfig, routerOptions)

export default SettingsScreenRouter
