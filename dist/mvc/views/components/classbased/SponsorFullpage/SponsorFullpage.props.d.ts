import { ImageURISource } from 'react-native';
import { Sponsor } from '../../../../models/Sponsor';
export interface SponsorFullpageProps {
    sponsor: Sponsor;
    whySponsor: string;
    challengeBgImage: ImageURISource;
}
