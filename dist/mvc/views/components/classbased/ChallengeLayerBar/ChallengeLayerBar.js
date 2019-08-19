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
var FilePickerController_1 = require("../../../../controllers/FilePickerController/FilePickerController");
var LocalStorageController_1 = require("../../../../controllers/LocalStorageController/LocalStorageController");
var LoggingController_1 = require("../../../../controllers/LoggingController/LoggingController");
var MultiLingualityController_1 = require("../../../../controllers/MultiLingualityController/MultiLingualityController");
var ShareController_1 = require("../../../../controllers/ShareController/ShareController");
var WarningsController_1 = require("../../../../controllers/WarningsController/WarningsController");
var MajorButton_1 = require("../../functional/MajorButton/MajorButton");
var SettingsRoutes_1 = require("../../system/TabRouter/SettingsScreenRouter/SettingsRoutes");
var ChallengeLayerBar_constants_1 = require("./ChallengeLayerBar.constants");
var ChallengeLayerBar_css_1 = require("./ChallengeLayerBar.css");
var ChallengeLayerBar_translations_1 = require("./ChallengeLayerBar.translations");
var TAG = 'ChallengeLayerBar';
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
            react_native_1.Alert.alert(MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.challenge_already_solved.title), MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.challenge_already_solved.msg), [{ text: MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.challenge_already_solved.btn_ok) }], {
                cancelable: true,
            });
        };
        _this.sendChallengeSolvedEmailToSponsor = function () { return __awaiter(_this, void 0, void 0, function () {
            var apiRes, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
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
                    case 2: return [4, (_c.sent()).json()];
                    case 3:
                        apiRes = _c.sent();
                        if (apiRes.err !== null && apiRes.err !== undefined) {
                            LoggingController_1.logEvent(LoggingController_1.LogType.ERROR, TAG + ":challengeSolved", apiRes.err);
                        }
                        else {
                            this.storeChallengeSolved();
                            LoggingController_1.logEvent(LoggingController_1.LogType.LOG, TAG + ":challengeSolved", 'Sent email to sponsor');
                        }
                        return [3, 5];
                    case 4:
                        e_1 = _c.sent();
                        console.error(e_1);
                        WarningsController_1.noInternetAvailable();
                        return [3, 5];
                    case 5: return [2];
                }
            });
        }); };
        _this.challengeSolved = function () { return __awaiter(_this, void 0, void 0, function () {
            var userAbortedProcedure, shareChallengeSolved;
            var _this = this;
            return __generator(this, function (_a) {
                this.setState({ isLoadingChallengeSolved: true });
                userAbortedProcedure = function () {
                    react_native_1.ToastAndroid.show(MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.toast.onabort_imgpicker_share), react_native_1.ToastAndroid.SHORT);
                    _this.setState({
                        currChallengeSolved: false,
                        isLoadingChallengeSolved: false,
                    });
                    LoggingController_1.logEvent(LoggingController_1.LogType.LOG, TAG + ":userAbortedProcedure", 'User aborted');
                };
                shareChallengeSolved = function () { return __awaiter(_this, void 0, void 0, function () {
                    var res, e_2;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 5, , 6]);
                                return [4, FilePickerController_1.openFilePicker()];
                            case 1:
                                res = _a.sent();
                                if (!(res.error || res.didCancel)) return [3, 2];
                                userAbortedProcedure();
                                LoggingController_1.logEvent(LoggingController_1.LogType.LOG, TAG + ":challengeSolved", 'User did not choose a file');
                                return [3, 4];
                            case 2: return [4, ShareController_1.shareMedia(this.props.headline, this.props.sponsorName, res)
                                    .then(function (response) {
                                    if (response) {
                                        _this.sendChallengeSolvedEmailToSponsor();
                                        _this.setState({
                                            currChallengeSolved: response,
                                            isLoadingChallengeSolved: false,
                                        });
                                    }
                                    else {
                                        react_native_1.Alert.alert('Ausgabe' + response);
                                        _this.sendChallengeSolvedEmailToSponsor();
                                    }
                                })];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [3, 6];
                            case 5:
                                e_2 = _a.sent();
                                LoggingController_1.logEvent(LoggingController_1.LogType.ERROR, TAG + ":challengeSolved", "Couldn't open imagePicker -> " + JSON.stringify(e_2));
                                return [3, 6];
                            case 6: return [2];
                        }
                    });
                }); };
                react_native_1.Alert.alert(MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.challenge_almost_solved.title), MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.challenge_almost_solved.msg), [
                    { text: MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.challenge_almost_solved.btn.ok), onPress: function () { return shareChallengeSolved(); } },
                    { text: MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.challenge_almost_solved.btn.cancel), onPress: function () { return userAbortedProcedure(); } },
                ], {
                    cancelable: true,
                });
                return [2];
            });
        }); };
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
                            react_native_1.Alert.alert(MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.settings_not_set.title), MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.settings_not_set.msg), [
                                {
                                    text: MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.dialog.settings_not_set.btn_ok),
                                    onPress: function () { return _this.props.navigation.navigate(SettingsRoutes_1.routes.SettingsScreen); },
                                },
                            ], {
                                cancelable: true,
                            });
                            this.props.navigation.navigate(SettingsRoutes_1.routes.SettingsScreen);
                        }
                        return [2];
                }
            });
        }); };
        _this.retrieveChallengeSolved = function () { return __awaiter(_this, void 0, void 0, function () {
            var currChallengeSolved, _a, e_3;
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
                            if (this.lastChallengeIdSolved === this.getCurrentChallengeSolvedId()) {
                                currChallengeSolved = true;
                            }
                        }
                        this.setState({ currChallengeSolved: currChallengeSolved });
                        this.props.setGrayscale(!this.state.currChallengeSolved);
                        return [3, 4];
                    case 3:
                        e_3 = _b.sent();
                        LoggingController_1.logEvent(LoggingController_1.LogType.ERROR, TAG + ":retrieveChallengeSolved", null, e_3);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        }); };
        _this.getCurrentChallengeSolvedId = function () {
            return _this.props.challengeId + "_" + _this.props.headline + "_" + _this.props.sponsorName + "_" + _this.props.subline;
        };
        _this.storeChallengeSolved = function () { return __awaiter(_this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, async_storage_1.default.setItem(ChallengeLayerBar_constants_1.CHALLENGE_SOLVED_ID, this.getCurrentChallengeSolvedId())];
                    case 1:
                        _a.sent();
                        this.setState({ currChallengeSolved: true });
                        this.props.setGrayscale(!this.state.currChallengeSolved);
                        return [3, 3];
                    case 2:
                        e_4 = _a.sent();
                        LoggingController_1.logEvent(LoggingController_1.LogType.ERROR, TAG + ":storeChallengeSolved", null, e_4);
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
                        {this.state.currChallengeSolved ? (<MajorButton_1.MajorButton title={MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.btn.accomplished)} btnType={MajorButton_1.MajorBtnType.HIGHLIGHTED} onPress={function () { return _this.challengeAlreadySolved(); }}/>) : (<MajorButton_1.MajorButton title={MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.btn.finish)} btnType={MajorButton_1.MajorBtnType.PRIMARY} onLongPress={function () { return _this.execBtnAccept(); }} onPress={function () { return react_native_1.ToastAndroid.show(MultiLingualityController_1.t(ChallengeLayerBar_translations_1.default.toast.onclick_btn_finish), react_native_1.ToastAndroid.SHORT); }} isLoading={this.state.isLoadingChallengeSolved}/>)}
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