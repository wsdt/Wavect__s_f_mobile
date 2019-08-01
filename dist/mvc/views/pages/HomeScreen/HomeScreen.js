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
var React = require("react");
var react_native_1 = require("react-native");
var globalConfig_1 = require("../../../../globalConfiguration/globalConfig");
var CacheController_1 = require("../../../controllers/CacheController/CacheController");
var CacheController_constants_1 = require("../../../controllers/CacheController/CacheController.constants");
var ChallengeFullpage_1 = require("../../components/stateful/ChallengeFullpage/ChallengeFullpage");
var LoadingHoc_1 = require("../../components/system/HOCs/LoadingHoc");
var BaseScreen_1 = require("../BaseScreen/BaseScreen");
var HomeScreen = (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            challenge: undefined,
        };
        _this.getChallengeComponent = function () {
            if (_this.state.challenge) {
                return <ChallengeFullpage_1.default challenge={_this.state.challenge}/>;
            }
            return null;
        };
        _this.fetchChallenge = function (reload, cb) {
            CacheController_1.cachedFetch(_this, CacheController_constants_1.CACHE_KEY_CHALLENGE, _this.loadingContext, reload, function () { return __awaiter(_this, void 0, void 0, function () {
                var data, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("Bumsen");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4, fetch(globalConfig_1.BACKEND_MOBILE_API + "/challenge/current")];
                        case 2: return [4, (_a.sent()).json()];
                        case 3:
                            data = _a.sent();
                            console.log(data);
                            this.setState({ challenge: data.res });
                            if (this.state.challenge) {
                                CacheController_1.putCache(CacheController_constants_1.CACHE_KEY_CHALLENGE, { challenge: data.res });
                                this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.DONE);
                            }
                            else {
                                this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.NOT_AVAILABLE);
                            }
                            if (cb) {
                                cb();
                            }
                            return [3, 5];
                        case 4:
                            e_1 = _a.sent();
                            console.error(e_1);
                            this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.ERROR);
                            if (cb) {
                                cb();
                            }
                            return [3, 5];
                        case 5: return [2];
                    }
                });
            }); });
        };
        return _this;
    }
    HomeScreen.prototype.componentDidMount = function () {
        var _this = this;
        this.fetchChallenge(false);
        this.loadingContext.setRefresh(function (cb) { return _this.fetchChallenge(true, cb); });
    };
    HomeScreen.prototype.render = function () {
        var _this = this;
        return (<BaseScreen_1.BaseScreen>
                <LoadingHoc_1.LoadingHoc.Consumer>
                    {function (contextMethods) {
            _this.loadingContext = contextMethods;
            return <react_native_1.View>{_this.getChallengeComponent()}</react_native_1.View>;
        }}
                </LoadingHoc_1.LoadingHoc.Consumer>
            </BaseScreen_1.BaseScreen>);
    };
    return HomeScreen;
}(React.PureComponent));
exports.HomeScreen = HomeScreen;
//# sourceMappingURL=HomeScreen.js.map