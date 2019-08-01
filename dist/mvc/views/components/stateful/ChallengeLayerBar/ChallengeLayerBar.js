"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_storage_1 = require("@react-native-community/async-storage");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var react_navigation_1 = require("react-navigation");
var globalConfig_1 = require("../../../../../globalConfiguration/globalConfig");
var LocalStorageController_1 = require("../../../../controllers/LocalStorageController");
var FilePickerController_1 = require("../../../../controllers/SocialController/FilePickerController");
var ShareController_1 = require("../../../../controllers/SocialController/ShareController");
var WarningsController_1 = require("../../../../controllers/WarningsController");
var MajorButton_1 = require("../../functional/MajorButton/MajorButton");
var SettingsRoutes_1 = require("../../system/TabRouter/SettingsScreenRouter/SettingsRoutes");
var ChallengeLayerBar_constants_1 = require("./ChallengeLayerBar.constants");
var ChallengeLayerBar_css_1 = require("./ChallengeLayerBar.css");
var ChallengeLayerBar = (function (_super) {
    __extends(ChallengeLayerBar, _super);
    function ChallengeLayerBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isLoadingChallengeSolved: false,
            currChallengeSolved: false,
        };
        _this.lastChallengeIdSolved = null;
        _this.challengeAlreadySolved = function () {
            react_native_1.Alert.alert('Challenge solved', 'Du hast diese Herausforderung bereits abgeschlossen. Bitte warte, bis sich der Sponsor mit dir in Verbindung setzt oder eine neue Herausforderung veröffentlicht wird.', [{ text: 'OK' }], {
                cancelable: true,
            });
        };
        _this.challengeSolved = function () {
            _this.setState({ isLoadingChallengeSolved: true });
            var userAbortedProcedure = function () {
                react_native_1.ToastAndroid.show('Bitte sag Bescheid, wenn du soweit bist!', react_native_1.ToastAndroid.SHORT);
                _this.setState({
                    currChallengeSolved: false,
                    isLoadingChallengeSolved: false,
                });
                console.log('ChallengeLayerBar:userAbortedProcedure: User aborted.');
            };
            FilePickerController_1.openFilePicker(function (res) {
                if (res.error || res.didCancel) {
                    userAbortedProcedure();
                    console.log('ChallengeLayerBar:challengeSolved: User did not choose a file.');
                }
                else {
                    console.log(res);
                    ShareController_1.shareImage(_this.props.headline, _this.props.sponsorName, res, function (wasShareSuccessful) { return __awaiter(_this, void 0, void 0, function () {
                        var rawResp, _a, _b, apiRes, e_1;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, 5, 6]);
                                    _a = fetch;
                                    _b = ChallengeLayerBar.API_ENDPOINT + "/current/";
                                    return [4, LocalStorageController_1.getLocalUserId()];
                                case 1: return [4, _a.apply(void 0, [_b + (_c.sent()), {
                                            method: 'POST',
                                            headers: {
                                                Accept: 'application/json',
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({
                                                email: this.props.sponsorEmail,
                                            }),
                                        }])];
                                case 2:
                                    rawResp = _c.sent();
                                    return [4, rawResp.json()];
                                case 3:
                                    apiRes = _c.sent();
                                    if (apiRes.error !== null && apiRes.error !== undefined) {
                                        console.error('ChallengeLayer:challengeSolved: ' + apiRes.error);
                                    }
                                    else {
                                        if (wasShareSuccessful) {
                                            this.storeChallengeSolved();
                                            react_native_1.Alert.alert('Sponsor notified', 'Wir haben den Sponsor der aktuellen Herausforderung benachrichtigt! Dieser sollte dich bzgl. Sponsoring demnächst kontaktieren.', [{ text: 'Super!' }], {
                                                cancelable: true,
                                            });
                                            console.log('ChallengeLayerBar:challengeSolved: Sent email to sponsor.');
                                        }
                                    }
                                    return [3, 6];
                                case 4:
                                    e_1 = _c.sent();
                                    console.error(e_1);
                                    WarningsController_1.noInternetAvailable();
                                    return [3, 6];
                                case 5:
                                    this.setState({
                                        currChallengeSolved: wasShareSuccessful,
                                        isLoadingChallengeSolved: false,
                                    });
                                    return [7];
                                case 6: return [2];
                            }
                        });
                    }); });
                }
            });
        };
        _this.execBtnAccept = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, LocalStorageController_1.getEmailMarked()];
                    case 1:
                        if (_a.sent()) {
                            this.challengeSolved();
                        }
                        else {
                            react_native_1.Alert.alert('Einen Moment noch!', 'Wir benötigen deine E-Mail Adresse damit dich unsere Sponsoren kontaktieren können.   ', [{ text: 'OK', onPress: function () { return _this.props.navigation.navigate(SettingsRoutes_1.routes.SettingsScreen); } }], {
                                cancelable: true,
                            });
                            this.props.navigation.navigate(SettingsRoutes_1.routes.SettingsScreen);
                        }
                        return [2];
                }
            });
        }); };
        _this.retrieveChallengeSolved = function () { return __awaiter(_this, void 0, void 0, function () {
            var currChallengeSolved, _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currChallengeSolved = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4, async_storage_1.default.getItem(ChallengeLayerBar_constants_1.CHALLENGE_SOLVED_ID)];
                    case 2:
                        _a.lastChallengeIdSolved = _b.sent();
                        if (this.lastChallengeIdSolved !== null) {
                            if (this.lastChallengeIdSolved === this.props.challengeId) {
                                currChallengeSolved = true;
                            }
                        }
                        this.setState({ currChallengeSolved: currChallengeSolved });
                        this.props.setGrayscale(!this.state.currChallengeSolved);
                        return [3, 4];
                    case 3:
                        e_2 = _b.sent();
                        console.error(e_2);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        }); };
        _this.storeChallengeSolved = function () { return __awaiter(_this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, async_storage_1.default.setItem(ChallengeLayerBar_constants_1.CHALLENGE_SOLVED_ID, this.props.challengeId)];
                    case 1:
                        _a.sent();
                        this.setState({ currChallengeSolved: true });
                        this.props.setGrayscale(!this.state.currChallengeSolved);
                        return [3, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); };
        return _this;
    }
    ChallengeLayerBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, headline = _a.headline, subline = _a.subline;
        return (<react_native_1.View style={ChallengeLayerBar_css_1.default.mainComponent}>
                <react_native_1.View style={ChallengeLayerBar_css_1.default.bottomActionContainer}>
                    <react_native_elements_1.Text style={ChallengeLayerBar_css_1.default.headline}>{headline}</react_native_elements_1.Text>
                    <react_native_elements_1.Text style={ChallengeLayerBar_css_1.default.subline}>{subline}</react_native_elements_1.Text>

                    <react_native_1.View style={ChallengeLayerBar_css_1.default.btnContainer}>
                        {this.state.currChallengeSolved ? (<MajorButton_1.MajorButton title="Challenge solved" btnType={MajorButton_1.MajorBtnType.HIGHLIGHTED} onPress={function () { return _this.challengeAlreadySolved(); }}/>) : (<MajorButton_1.MajorButton title="Abschließen" btnType={MajorButton_1.MajorBtnType.PRIMARY} onLongPress={function () { return _this.execBtnAccept(); }} onPress={function () { return react_native_1.ToastAndroid.show('Gedrückt halten, um die Challenge abzuschließen', react_native_1.ToastAndroid.SHORT); }} isLoading={this.state.isLoadingChallengeSolved}/>)}
                    </react_native_1.View>
                </react_native_1.View>
            </react_native_1.View>);
    };
    ChallengeLayerBar.prototype.componentDidMount = function () {
        this.retrieveChallengeSolved();
    };
    ChallengeLayerBar.API_ENDPOINT = globalConfig_1.BACKEND_MOBILE_API + "/email";
    return ChallengeLayerBar;
}(react_1.default.PureComponent));
exports.default = react_navigation_1.withNavigation(ChallengeLayerBar);
//# sourceMappingURL=ChallengeLayerBar.js.map