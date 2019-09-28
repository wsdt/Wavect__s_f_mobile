"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChallengeInformation = (function () {
    function ChallengeInformation(id, instruction, privacy, intention, misc, reward) {
        this.id = id;
        this.instruction = instruction;
        this.privacy = privacy;
        this.intention = intention;
        this.misc = misc;
        this.reward = reward;
    }
    Object.defineProperty(ChallengeInformation.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChallengeInformation.prototype, "instruction", {
        get: function () {
            return this._instruction;
        },
        set: function (value) {
            this._instruction = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChallengeInformation.prototype, "privacy", {
        get: function () {
            return this._privacy;
        },
        set: function (value) {
            this._privacy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChallengeInformation.prototype, "intention", {
        get: function () {
            return this._intention;
        },
        set: function (value) {
            this._intention = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChallengeInformation.prototype, "misc", {
        get: function () {
            return this._misc;
        },
        set: function (value) {
            this._misc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChallengeInformation.prototype, "reward", {
        get: function () {
            return this._reward;
        },
        set: function (reward) {
            this._reward = reward;
        },
        enumerable: true,
        configurable: true
    });
    return ChallengeInformation;
}());
exports.ChallengeInformation = ChallengeInformation;
//# sourceMappingURL=ChallengeInformation.js.map