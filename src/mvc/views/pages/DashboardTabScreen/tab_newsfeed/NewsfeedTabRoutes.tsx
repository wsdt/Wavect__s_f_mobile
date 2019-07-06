import {createStackNavigator} from "react-navigation"
import {routesStr} from "../DashboardTabScreen.constants"
import {NewsfeedTab} from "./NewsfeedTab"

/** Stack Navigator as tabs might have own routes, too */
export const NewsfeedTabRoutes = createStackNavigator({
    [routesStr.NewsfeedStack.Home]: NewsfeedTab,
})