import { Sponsor } from "../../../../models/Sponsor"
import {ImageURISource} from "react-native";

export interface SponsorFullpageProps {
    sponsor: Sponsor
    whySponsor: string
    challengeBgImage: ImageURISource
    // No navigation prop necessary here
}
