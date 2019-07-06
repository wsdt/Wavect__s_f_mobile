import {createStackNavigator} from "react-navigation"
import {routesStr} from "../DashboardTabScreen.constants"
import {ProfileTab} from "./ProfileTab"

/** Stack Navigator as tabs might have own routes, too */
export const ProfileTabRoutes = createStackNavigator({
    [routesStr.ProfileStack.Home]: ProfileTab,
})