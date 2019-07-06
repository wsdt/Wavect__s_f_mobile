import { Sponsor } from "../../../../models/Sponsor"

export interface ISponsorFullpageProps {
    sponsor: Sponsor
    whySponsor: string
    // No navigation prop necessary here
}
