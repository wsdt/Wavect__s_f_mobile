import { ImageURISource } from "react-native"

export class Sponsor {
    private _id!: string
    private _name!: string
    private _logoUri!: ImageURISource
    private _shortDescr!: string
    private _website!: string
    private _email!: string
    private _youtube?: string
    private _instagram?: string
    private _linkedin?: string
    private _facebook?: string

    public constructor(
        id: string,
        name: string,
        logoUri: ImageURISource,
        shortDescr: string,
        website: string,
        email: string,
        facebook: string,
        instagram: string,
        linkedin: string,
        youtube: string
    ) {
        this.id = id
        this.name = name
        this.logoUri = logoUri
        this.shortDescr = shortDescr
        this.website = website
        this.email = email
        this.youtube = youtube
        this.instagram = instagram
        this.facebook = facebook
        this.linkedin = linkedin
    }

    set id(sponsorId: string) {
        this._id = sponsorId
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get logoUri(): ImageURISource {
        return this._logoUri
    }

    set logoUri(value: ImageURISource) {
        this._logoUri = value
    }

    get shortDescr(): string {
        return this._shortDescr
    }

    set shortDescr(value: string) {
        this._shortDescr = value
    }

    get website(): string {
        return this._website
    }

    set website(value: string) {
        this._website = value
    }

    get email(): string {
        return this._email
    }

    set email(value: string) {
        this._email = value
    }

    get youtube(): string | undefined {
        return this._youtube
    }

    set youtube(value: string | undefined) {
        this._youtube = value
    }

    get instagram(): string | undefined {
        return this._instagram
    }

    set instagram(value: string | undefined) {
        this._instagram = value
    }

    get linkedin(): string | undefined {
        return this._linkedin
    }

    set linkedin(value: string | undefined) {
        this._linkedin = value
    }

    get facebook(): string | undefined {
        return this._facebook
    }

    set facebook(value: string | undefined) {
        this._facebook = value
    }
}
