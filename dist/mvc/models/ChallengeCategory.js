"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var AssetIndex_1 = require("../../assets/AssetIndex");
var ChallengeCategory;
(function (ChallengeCategory) {
    ChallengeCategory["ENVIRONMENT"] = "ENVIRONMENT";
    ChallengeCategory["HEALTH"] = "HEALTH";
    ChallengeCategory["SOCIETY"] = "SOCIETY";
})(ChallengeCategory = exports.ChallengeCategory || (exports.ChallengeCategory = {}));
exports.CHALLENGE_CATEGORIES = (_a = {},
    _a[ChallengeCategory.ENVIRONMENT] = {
        descr: 'Herausforderungen dieser Kategorie fokussieren sich auf den Schutz der Umwelt.',
        icon: AssetIndex_1.ICO_ENVIRONMENT,
    },
    _a[ChallengeCategory.HEALTH] = {
        descr: 'Herausforderungen dieser Kategorie helfen dir, dir gesündere Verhaltensweisen anzueignen.',
        icon: AssetIndex_1.ICO_HEALTH,
    },
    _a[ChallengeCategory.SOCIETY] = {
        descr: 'Diese Kategorie soll gezielt Spaß machen und sozialen Wert schaffen.',
        icon: AssetIndex_1.ICO_SOCIETY,
    },
    _a);
//# sourceMappingURL=ChallengeCategory.js.map