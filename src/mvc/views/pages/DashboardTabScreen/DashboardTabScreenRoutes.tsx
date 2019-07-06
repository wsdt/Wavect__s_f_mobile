import * as React from "react"
import {Icon} from "react-native-elements"
import {NavigationRouteConfigMap} from "react-navigation"
import p from "../../../controllers/parseScss"
import * as styles from "../../components/system/TabRouter/TabBar.scss"
import {routesStr} from "./DashboardTabScreen.constants"
import {ChallengeTab} from "./tab_challenges/ChallengeTab"
import {NewsfeedTab} from "./tab_newsfeed/NewsfeedTab"
import {ProfileTab} from "./tab_profile/ProfileTab"


export const routesObj: NavigationRouteConfigMap = {
    [routesStr.ChallengeStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="lock" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Challenges",
        },
        screen: ChallengeTab,
    },
    [routesStr.NewsfeedStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="list" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Newsfeed",
        },
        screen: NewsfeedTab,
    },
    [routesStr.ProfileStack.Home]: {
        navigationOptions: {
            tabBarIcon: () => (
                <Icon name="accessibility" type="material" iconStyle={p(styles.tabIcon)}/>
            ),
            tabBarLabel: "Profile",
        },
        screen: ProfileTab,
    },
}