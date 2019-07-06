import { NavigationRouteConfigMap } from "react-navigation"
import {DashboardTabScreen} from "../../../pages/DashboardTabScreen/DashboardTabScreen";
import { TestScreen } from "../../../pages/TestScreen/TestScreen"
import {routes} from "./Routes"

/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
export const routesConfig: NavigationRouteConfigMap = {
    [routes.TestScreen]: {
        // key of route configuration
        navigationOptions: () => ({
            title: "TestScreen Title", // which title to show in navbar
        }),
        screen: TestScreen, // which component to load
    },
    [routes.DashboardTabScreen]: {
        navigationOptions: () => ({
            title: "Your Tabs",
        }),
        screen: DashboardTabScreen,
    }
}
