"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Challenge = (function () {
    function Challenge(id, headline, subline, whyDoesOrganizationSponsor, expirationInMs, majorCategory, bgImage, sponsor, challengeInformation) {
        this.id = id;
        this.bgImage = bgImage;
        this.majorCategory = majorCategory;
        this.sponsor = sponsor;
        this.challengeInformation = challengeInformation;
        this.subline = subline;
        this.headline = headline;
        this.whyDoesOrganizationSponsor = whyDoesOrganizationSponsor;
        this.expirationInMs = expirationInMs;
    }
    Object.defineProperty(Challenge.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "whyDoesOrganizationSponsor", {
        get: function () {
            return this._whyDoesOrganizationSponsor;
        },
        set: function (value) {
            this._whyDoesOrganizationSponsor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "expirationInMs", {
        get: function () {
            return this._expirationInMs;
        },
        set: function (value) {
            this._expirationInMs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "bgImage", {
        get: function () {
            return this._bgImage;
        },
        set: function (value) {
            this._bgImage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "majorCategory", {
        get: function () {
            return this._majorCategory;
        },
        set: function (value) {
            this._majorCategory = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "sponsor", {
        get: function () {
            return this._sponsor;
        },
        set: function (value) {
            this._sponsor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "subline", {
        get: function () {
            return this._subline;
        },
        set: function (value) {
            this._subline = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "headline", {
        get: function () {
            return this._headline;
        },
        set: function (value) {
            this._headline = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "challengeInformation", {
        get: function () {
            return this._challengeInformation;
        },
        set: function (value) {
            this._challengeInformation = value;
        },
        enumerable: true,
        configurable: true
    });
    return Challenge;
}());
exports.Challenge = Challenge;
//# sourceMappingURL=Challenge.js.map