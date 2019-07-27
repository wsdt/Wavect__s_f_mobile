import { ImageURISource } from "react-native";
import { ChallengeCategory } from "./ChallengeCategory";
import { Sponsor } from "./Sponsor";
export declare class Challenge {
    id: string;
    whyDoesOrganizationSponsor: string;
    expirationInMs: number;
    bgImage: ImageURISource;
    majorCategory: ChallengeCategory;
    sponsor: Sponsor;
    subline: string;
    headline: string;
    private _id;
    private _headline;
    private _subline;
    private _whyDoesOrganizationSponsor;
    private _expirationInMs;
    private _sponsor;
    private _majorCategory;
    private _bgImage;
    constructor(id: string, headline: string, subline: string, whyDoesOrganizationSponsor: string, expirationInMs: number, majorCategory: ChallengeCategory, bgImage: ImageURISource, sponsor: Sponsor);
}
