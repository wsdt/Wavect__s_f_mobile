import { ImageURISource } from 'react-native'
import { Sponsor } from '../../../../models/Sponsor'

export interface ISponsorFullpageProps {
    sponsor: Sponsor
    whySponsor: string
    challengeBgImage: ImageURISource
    // No navigation prop necessary here
}
