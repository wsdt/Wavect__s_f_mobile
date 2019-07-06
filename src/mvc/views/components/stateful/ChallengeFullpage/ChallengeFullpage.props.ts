import { NavigationInjectedProps, NavigationParams, NavigationRoute, NavigationScreenProp } from "react-navigation"
import { Challenge } from "../../../../models/Challenge"

export interface IChallengeFullpageProps {
    challenge: Challenge
    navigation: NavigationInjectedProps<NavigationParams> & NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}
