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
var react_navigation_1 = require("react-navigation");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var ChallengeTypeIcon_1 = require("../../functional/ChallengeTypeIcon/ChallengeTypeIcon");
var CompanyLogo_1 = require("../../functional/CompanyLogo/CompanyLogo");
var GrayColorImg_1 = require("../../functional/GrayColorImg/GrayColorImg");
var LoadingHoc_1 = require("../../system/HOCs/LoadingHoc");
var HomeRoutes_1 = require("../../system/TabRouter/HomeScreenRouter/HomeRoutes");
var ChallengeLayerBar_1 = require("../ChallengeLayerBar/ChallengeLayerBar");
var ChallengeFullpage_css_1 = require("./ChallengeFullpage.css");
var ChallengeFullpage = (function (_super) {
    __extends(ChallengeFullpage, _super);
    function ChallengeFullpage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isGrayscale: true,
            isLoading: true,
        };
        _this.getChallengeView = function () {
            var _a = _this.props.challenge, id = _a.id, headline = _a.headline, subline = _a.subline, sponsor = _a.sponsor, majorCategory = _a.majorCategory, expirationInMs = _a.expirationInMs, whyDoesOrganizationSponsor = _a.whyDoesOrganizationSponsor;
            return (<>
                <react_native_1.View style={ChallengeFullpage_css_1.default.top}>
                    <CompanyLogo_1.CompanyLogo companyLogoUri={sponsor.logoUri} isGrayscale={_this.state.isGrayscale} onPressed={function () {
                _this.props.navigation.navigate(HomeRoutes_1.routes.SponsorFullpage, {
                    sponsor: sponsor,
                    whySponsor: whyDoesOrganizationSponsor,
                });
            }}/>
                    <ChallengeTypeIcon_1.ChallengeTypeIcon type={majorCategory} isGrayscale={_this.state.isGrayscale}/>
                </react_native_1.View>
                <ChallengeLayerBar_1.default headline={headline} setGrayscale={function (isGrayscale) { return _this.setState({ isGrayscale: isGrayscale }); }} subline={subline} expirationInMs={expirationInMs} challengeId={id} sponsorEmail={sponsor.email}/>
            </>);
        };
        _this.onLoad = function () {
            _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.DONE);
        };
        return _this;
    }
    ChallengeFullpage.prototype.render = function () {
        var _this = this;
        var bgImage = this.props.challenge.bgImage;
        bgImage.cache = "only-if-cached";
        return (<LoadingHoc_1.LoadingHoc.Consumer>
                {function (contextMethods) {
            _this.loadingContext = contextMethods;
            return (<GrayColorImg_1.GrayColorImg isGrayscale={_this.state.isGrayscale}>
                            <>
                                <react_native_1.Image source={bgImage} style={[ChallengeFullpage_css_1.default.backgroundImage, GlobalStyles_css_1.default.radius]} onLoad={_this.onLoad} onLoadStart={function () { return _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.LOADING); }} onError={function () { return _this.loadingContext.setLoading(LoadingHoc_1.LoadingStatus.ERROR); }}/>
                                {_this.getChallengeView()}
                            </>
                        </GrayColorImg_1.GrayColorImg>);
        }}
            </LoadingHoc_1.LoadingHoc.Consumer>);
    };
    return ChallengeFullpage;
}(React.PureComponent));
exports.default = react_navigation_1.withNavigation(ChallengeFullpage);
//# sourceMappingURL=ChallengeFullpage.js.map