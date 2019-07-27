"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sponsor = (function () {
    function Sponsor(id, name, logoUri, shortDescr, website, email, facebook, instagram, linkedin, youtube) {
        this.id = id;
        this.name = name;
        this.logoUri = logoUri;
        this.shortDescr = shortDescr;
        this.website = website;
        this.email = email;
        this.youtube = youtube;
        this.instagram = instagram;
        this.facebook = facebook;
        this.linkedin = linkedin;
    }
    Object.defineProperty(Sponsor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (sponsorId) {
            this._id = sponsorId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "logoUri", {
        get: function () {
            return this._logoUri;
        },
        set: function (value) {
            this._logoUri = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "shortDescr", {
        get: function () {
            return this._shortDescr;
        },
        set: function (value) {
            this._shortDescr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "website", {
        get: function () {
            return this._website;
        },
        set: function (value) {
            this._website = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "youtube", {
        get: function () {
            return this._youtube;
        },
        set: function (value) {
            this._youtube = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "instagram", {
        get: function () {
            return this._instagram;
        },
        set: function (value) {
            this._instagram = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "linkedin", {
        get: function () {
            return this._linkedin;
        },
        set: function (value) {
            this._linkedin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sponsor.prototype, "facebook", {
        get: function () {
            return this._facebook;
        },
        set: function (value) {
            this._facebook = value;
        },
        enumerable: true,
        configurable: true
    });
    return Sponsor;
}());
exports.Sponsor = Sponsor;
//# sourceMappingURL=Sponsor.js.map