import { ImageURISource } from "react-native";
export declare class Sponsor {
    private _id;
    private _name;
    private _logoUri;
    private _shortDescr;
    private _website;
    private _email;
    private _youtube?;
    private _instagram?;
    private _linkedin?;
    private _facebook?;
    constructor(id: string, name: string, logoUri: ImageURISource, shortDescr: string, website: string, email: string, facebook: string, instagram: string, linkedin: string, youtube: string);
    id: string;
    name: string;
    logoUri: ImageURISource;
    shortDescr: string;
    website: string;
    email: string;
    youtube: string | undefined;
    instagram: string | undefined;
    linkedin: string | undefined;
    facebook: string | undefined;
}
