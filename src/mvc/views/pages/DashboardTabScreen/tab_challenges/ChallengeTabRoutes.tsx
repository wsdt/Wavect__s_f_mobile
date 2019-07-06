import {createStackNavigator} from "react-navigation"
import {routesStr} from "../DashboardTabScreen.constants"
import {ChallengeTab} from "./ChallengeTab"

/** Stack Navigator as tabs might have own routes, too */
export const ChallengeTabRoutes = createStackNavigator({
    [routesStr.ChallengeStack.Home]: ChallengeTab,
})