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
var react_native_elements_1 = require("react-native-elements");
var react_native_splash_screen_1 = require("react-native-splash-screen");
var react_navigation_1 = require("react-navigation");
var LoggingController_1 = require("../../../controllers/LoggingController/LoggingController");
var MultiLingualityController_1 = require("../../../controllers/MultiLingualityController/MultiLingualityController");
var UpdateController_1 = require("../../../controllers/UpdateController/UpdateController");
var LoadingIndicator_1 = require("../../components/functional/LoadingIndicator/LoadingIndicator");
var LoadingHoc_1 = require("../../components/system/HOCs/LoadingHoc");
var GlobalStyles_css_1 = require("../../GlobalStyles.css");
var BaseScreen_css_1 = require("./BaseScreen.css");
var BaseScreen_translations_1 = require("./BaseScreen.translations");
var TAG = "BaseScreen";
var BaseScreen = (function (_super) {
    __extends(BaseScreen, _super);
    function BaseScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loadingStatus: LoadingHoc_1.LoadingStatus.LOADING,
            isRefreshing: false,
            refreshCallback: function (cb) {
                LoggingController_1.logEvent(LoggingController_1.LogType.WARN, TAG + ":refreshCallback", "No refresh function provided");
                cb();
            },
        };
        _this.onRefresh = function () {
            _this.setState({ isRefreshing: true });
            _this.state.refreshCallback(function () {
                _this.setState({ isRefreshing: false });
                LoggingController_1.logEvent(LoggingController_1.LogType.LOG, TAG + ":onRefresh", "User refreshed screen");
            });
        };
        _this.getCenteredText = function (text, containerStyle) {
            return (<react_native_1.View style={[{ justifyContent: "center", height: "100%" }, containerStyle]}>
                <react_native_elements_1.Text>{text}</react_native_elements_1.Text>
            </react_native_1.View>);
        };
        _this.getLoadingStatusComponent = function () {
            switch (_this.state.loadingStatus) {
                case LoadingHoc_1.LoadingStatus.LOADING:
                    return <LoadingIndicator_1.LoadingIndicator />;
                case LoadingHoc_1.LoadingStatus.PREPARING:
                    return (<>
                        <LoadingIndicator_1.LoadingIndicator />
                        {_this.getCenteredText(MultiLingualityController_1.t(BaseScreen_translations_1.default.loading.preparing), { marginTop: 30 })}
                    </>);
                case LoadingHoc_1.LoadingStatus.NOT_AVAILABLE:
                    return _this.getCenteredText(MultiLingualityController_1.t(BaseScreen_translations_1.default.loading.not_available));
                case LoadingHoc_1.LoadingStatus.ERROR:
                    return _this.getCenteredText(MultiLingualityController_1.t(BaseScreen_translations_1.default.loading.error));
                default:
                    return null;
            }
        };
        _this.getDisplayProp = function () {
            return _this.state.loadingStatus !== LoadingHoc_1.LoadingStatus.DONE ? { display: "none" } : null;
        };
        return _this;
    }
    BaseScreen.prototype.componentDidMount = function () {
        var _this = this;
        react_native_splash_screen_1.default.hide();
        if (!UpdateController_1.hasPerformedUpdateCheck) {
            this.setState({ loadingStatus: LoadingHoc_1.LoadingStatus.PREPARING });
            UpdateController_1.performAppUpdateProcedure().then(function () {
                _this.setState({ loadingStatus: LoadingHoc_1.LoadingStatus.LOADING });
            });
        }
    };
    BaseScreen.prototype.render = function () {
        var _this = this;
        var contextMethods = {
            setLoading: function (loadingStatus) { return _this.setState({ loadingStatus: loadingStatus }); },
            setRefresh: function (refreshCallback) { return _this.setState({ refreshCallback: refreshCallback }); },
        };
        return (<LoadingHoc_1.LoadingHoc.Provider value={contextMethods}>
                <react_navigation_1.ScrollView refreshControl={<react_native_1.RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh}/>} contentContainerStyle={BaseScreen_css_1.default.page}>
                    {this.getLoadingStatusComponent()}
                    <react_navigation_1.SafeAreaView>
                        <react_native_1.View style={[this.getDisplayProp(), GlobalStyles_css_1.default.scrollViewContainer]}>{this.props.children}</react_native_1.View>
                    </react_navigation_1.SafeAreaView>
                </react_navigation_1.ScrollView>
            </LoadingHoc_1.LoadingHoc.Provider>);
    };
    return BaseScreen;
}(React.PureComponent));
exports.BaseScreen = BaseScreen;
//# sourceMappingURL=BaseScreen.js.map