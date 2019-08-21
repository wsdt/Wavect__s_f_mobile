import { createStackNavigator } from "react-navigation"
import { routesConfig } from "./GeneralSettingsScreenRouterConfigMap"
import { routerOptions } from "./GeneralSettingsScreenRouterOptions"

/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
const GeneralSettingsScreenRouter = createStackNavigator(routesConfig, routerOptions)

export default GeneralSettingsScreenRouter
