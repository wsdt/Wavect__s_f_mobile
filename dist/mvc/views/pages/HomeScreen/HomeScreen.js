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
            CacheController_1.cachedFetch(_this, CacheController_constants_1.CACHE_KEY_CHALLENGE, _this.loadingContext, reload, function () {
                fetch(globalConfig_1.BACKEND_MOBILE_API + "/challenge/current")
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                    _this.setState({ challenge: data.res });
                    if (_this.state.challenge) {
                        CacheController_1.putCache(CacheController_constants_1.CACHE_KEY_CHALLENGE, { challenge: data.res });
                        _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.DONE);
                    }
                    else {
                        _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.NOT_AVAILABLE);
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
            });
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