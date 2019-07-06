import { NavigationInjectedProps, NavigationParams, NavigationRoute, NavigationScreenProp } from "react-navigation"

export interface IChallengeLayerBarProps {
    setGrayscale: (isGrayscale:boolean) => void
    challengeId: string
    headline: string
    subline: string
    expirationInMs: number
    sponsorEmail: string
    navigation: NavigationInjectedProps<NavigationParams> & NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}
