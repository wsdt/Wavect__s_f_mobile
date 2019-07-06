import { NavigationRouteConfigMap } from "react-navigation"
import {HomeScreen} from "../../../../pages/HomeScreen/HomeScreen"
import SponsorFullpage from "../../../stateful/SponsorFullpage/SponsorFullpage"
import { routes } from "./HomeRoutes"

export const routesConfig: NavigationRouteConfigMap = {
    [routes.HomeScreen]: {
        screen: HomeScreen, // which component to load
        navigationOptions: () => ({
            title: "Challenge", // which title to show in navbar
        }),
    },
    [routes.SponsorFullpage]: {
        screen: SponsorFullpage,
        navigationOptions: () => ({
            title: "Sponsor", // which title to show in navbar
        }),
    },
}
