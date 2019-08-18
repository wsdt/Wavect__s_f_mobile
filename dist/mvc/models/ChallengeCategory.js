"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetIndex_1 = require("../../assets/AssetIndex");
var _schema = require("../../assets/translations/_schema.json");
var s = _schema.models.challenge_category;
var ChallengeCategory;
(function (ChallengeCategory) {
    ChallengeCategory["ENVIRONMENT"] = "ENVIRONMENT";
    ChallengeCategory["HEALTH"] = "HEALTH";
    ChallengeCategory["SOCIETY"] = "SOCIETY";
})(ChallengeCategory = exports.ChallengeCategory || (exports.ChallengeCategory = {}));
exports.CHALLENGE_CATEGORIES = function (t) {
    var _a;
    return _a = {},
        _a[ChallengeCategory.ENVIRONMENT] = {
            descr: t(s.environment.descr),
            icon: AssetIndex_1.ICO_ENVIRONMENT,
        },
        _a[ChallengeCategory.HEALTH] = {
            descr: t(s.health.descr),
            icon: AssetIndex_1.ICO_HEALTH,
        },
        _a[ChallengeCategory.SOCIETY] = {
            descr: t(s.social.descr),
            icon: AssetIndex_1.ICO_SOCIETY,
        },
        _a;
};
//# sourceMappingURL=ChallengeCategory.js.map