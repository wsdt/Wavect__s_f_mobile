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
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var globalConfig_1 = require("../../../../../globalConfiguration/globalConfig");
var LocalStorageController_1 = require("../../../../controllers/LocalStorageController");
var WarningsController_1 = require("../../../../controllers/WarningsController");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var LoadingHoc_1 = require("../../system/HOCs/LoadingHoc");
var SettingsFullpage_css_1 = require("./SettingsFullpage.css");
var SettingsFullpage = (function (_super) {
    __extends(SettingsFullpage, _super);
    function SettingsFullpage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasAcceptedDataPrivacy: false,
            email: "",
            validEmail: false,
            isSavingSettings: false,
        };
        _this.userId = "";
        _this.getSettingsView = function () {
            var isFormSubmittable = _this.isFormSubmittable();
            return (<>
                <react_native_elements_1.Text style={SettingsFullpage_css_1.default.row}>
                    Deine E-Mail Adresse wird benötigt, um dich bzgl. gewonnenen Rabatten, Gutscheinen oder Produkten/Services zu kontaktieren.
                </react_native_elements_1.Text>

                <react_native_elements_1.Input value={_this.state.email} onChangeText={function (text) { return _this.emailValidation(text); }} containerStyle={[SettingsFullpage_css_1.default.row, SettingsFullpage_css_1.default.fullAbsoluteWidth]} label="E-Mail" placeholder=" Deine E-Mail" leftIcon={<react_native_elements_1.Icon name="envelope" type="font-awesome"/>} shake={true} errorMessage={_this.state.validEmail ? "" : "Bitte gib eine gültige E-Mail an."}/>

                <react_native_elements_1.CheckBox checked={_this.state.hasAcceptedDataPrivacy} containerStyle={SettingsFullpage_css_1.default.row} checkedColor="#000" title="Ich verstehe und akzeptiere, dass meine E-Mail-Adresse bei erfolgreichem Abschluss einer Herausforderung an den angegebenen Sponsor übermittelt wird." onPress={function () { return _this.setState({ hasAcceptedDataPrivacy: !_this.state.hasAcceptedDataPrivacy }); }}/>

                <react_native_elements_1.Button containerStyle={[SettingsFullpage_css_1.default.row, SettingsFullpage_css_1.default.fullAbsoluteWidth]} type="outline" title=" Speichern" raised={isFormSubmittable} loading={_this.state.isSavingSettings} disabled={!isFormSubmittable} icon={<react_native_elements_1.Icon name="save" type="font-awesome"/>} onPress={_this.postUserSettings}/>
            </>);
        };
        _this.getUserId = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.userId) return [3, 2];
                        _a = this;
                        return [4, LocalStorageController_1.getLocalUserId()];
                    case 1:
                        _a.userId = _b.sent();
                        _b.label = 2;
                    case 2: return [2, this.userId];
                }
            });
        }); };
        _this.getUserSettings = function (cb) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = fetch;
                        _b = SettingsFullpage.API_ENDPOINT + "/";
                        return [4, this.getUserId()];
                    case 1:
                        _a.apply(void 0, [_b + (_c.sent())])
                            .then(function (res) { return res.json(); })
                            .then(function (data) {
                            if (data.res) {
                                _this.setState({
                                    hasAcceptedDataPrivacy: data.res.hasAcceptedDataPrivacy,
                                    email: data.res.email,
                                    validEmail: true,
                                });
                                _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.DONE);
                                console.log("SettingsFullpage:getUserSettings: Received user settings.");
                            }
                            else {
                                console.log("SettingsFullpage:getUserSettings: No user settings previously saved");
                                _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.DONE);
                            }
                            if (cb) {
                                cb();
                            }
                        })
                            .catch(function (e) {
                            console.error(e);
                            _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.ERROR);
                            if (cb) {
                                cb();
                            }
                        });
                        return [2];
                }
            });
        }); };
        _this.postUserSettings = function () {
            _this.setState({ isSavingSettings: true }, function () { return __awaiter(_this, void 0, void 0, function () {
                var rawResp, _a, _b, res, e_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 4, , 5]);
                            _a = fetch;
                            _b = SettingsFullpage.API_ENDPOINT + "/";
                            return [4, this.getUserId()];
                        case 1: return [4, _a.apply(void 0, [_b + (_c.sent()), {
                                    method: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        email: this.state.email,
                                        hasAcceptedDataPrivacy: this.state.hasAcceptedDataPrivacy,
                                    }),
                                }])];
                        case 2:
                            rawResp = _c.sent();
                            return [4, rawResp.json()];
                        case 3:
                            res = _c.sent();
                            LocalStorageController_1.markEmailAsCreated();
                            this.setState({ isSavingSettings: false });
                            console.log("SettingsFullpage:postUserSettings: Tried to save userSettings -> " + JSON.stringify(res));
                            return [3, 5];
                        case 4:
                            e_1 = _c.sent();
                            WarningsController_1.noInternetAvailable();
                            console.error(e_1);
                            return [3, 5];
                        case 5: return [2];
                    }
                });
            }); });
        };
        _this.emailValidation = function (email) {
            _this.setState({ email: email, validEmail: SettingsFullpage.EMAIL_REGEX.test(email) });
        };
        _this.isFormSubmittable = function () {
            return _this.state.validEmail && _this.state.hasAcceptedDataPrivacy;
        };
        return _this;
    }
    SettingsFullpage.prototype.componentDidMount = function () {
        this.getUserSettings();
        this.loadingContext.setRefresh(this.getUserSettings);
    };
    SettingsFullpage.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={[GlobalStyles_css_1.default.pageContainer, SettingsFullpage_css_1.default.fullpageWidth]}>
                <LoadingHoc_1.LoadingHoc.Consumer>
                    {function (contextMethods) {
            _this.loadingContext = contextMethods;
            return _this.getSettingsView();
        }}
                </LoadingHoc_1.LoadingHoc.Consumer>
            </react_native_1.View>);
    };
    SettingsFullpage.API_ENDPOINT = globalConfig_1.BACKEND_MOBILE_API + "/settings";
    SettingsFullpage.EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return SettingsFullpage;
}(react_1.default.PureComponent));
exports.SettingsFullpage = SettingsFullpage;
//# sourceMappingURL=SettingsFullpage.js.map