import { ImageURISource } from "react-native"
import { ChallengeCategory } from "./ChallengeCategory"
import { Sponsor } from "./Sponsor"

export class Challenge {
    get id(): string {
        return this._id
    }

    set id(value: string) {
        this._id = value
    }
    get whyDoesOrganizationSponsor(): string {
        return this._whyDoesOrganizationSponsor
    }

    set whyDoesOrganizationSponsor(value: string) {
        this._whyDoesOrganizationSponsor = value
    }
    get expirationInMs(): number {
        return this._expirationInMs
    }

    set expirationInMs(value: number) {
        this._expirationInMs = value
    }
    get bgImage(): ImageURISource {
        return this._bgImage
    }

    set bgImage(value: ImageURISource) {
        this._bgImage = value
    }
    get majorCategory(): ChallengeCategory {
        return this._majorCategory
    }

    set majorCategory(value: ChallengeCategory) {
        this._majorCategory = value
    }
    get sponsor(): Sponsor {
        return this._sponsor
    }

    set sponsor(value: Sponsor) {
        this._sponsor = value
    }
    get subline(): string {
        return this._subline
    }

    set subline(value: string) {
        this._subline = value
    }
    get headline(): string {
        return this._headline
    }

    set headline(value: string) {
        this._headline = value
    }

    private _id!: string
    private _headline!: string
    private _subline!: string
    private _whyDoesOrganizationSponsor!: string
    private _expirationInMs!: number
    private _sponsor!: Sponsor
    private _majorCategory!: ChallengeCategory
    private _bgImage!: ImageURISource

    public constructor(
        id: string,
        headline: string,
        subline: string,
        whyDoesOrganizationSponsor: string,
        expirationInMs: number,
        majorCategory: ChallengeCategory,
        bgImage: ImageURISource,
        sponsor: Sponsor
    ) {
        this.id = id
        this.bgImage = bgImage
        this.majorCategory = majorCategory
        this.sponsor = sponsor
        this.subline = subline
        this.headline = headline
        this.whyDoesOrganizationSponsor = whyDoesOrganizationSponsor
        this.expirationInMs = expirationInMs
    }
}
