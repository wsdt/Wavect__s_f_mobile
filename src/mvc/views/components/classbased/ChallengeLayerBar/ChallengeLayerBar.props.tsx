import { ImageURISource } from 'react-native'
import { NavigationInjectedProps, NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation'

export interface IChallengeLayerBarProps {
    setGrayscale: (isGrayscale: boolean) => void
    challengeId: string
    headline: string
    subline: string
    expirationInMs: number
    sponsorEmail: string
    sponsorName: string
    sponsorLogo: ImageURISource
    navigation: NavigationInjectedProps<NavigationParams> & NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}
