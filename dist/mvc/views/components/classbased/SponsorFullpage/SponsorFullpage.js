"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_color_matrix_image_filters_1 = require("react-native-color-matrix-image-filters");
var react_native_fast_image_1 = require("react-native-fast-image");
var react_navigation_props_mapper_1 = require("react-navigation-props-mapper");
var MultiLingualityController_1 = require("../../../../controllers/MultiLingualityController/MultiLingualityController");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
var MajorButton_1 = require("../../functional/MajorButton/MajorButton");
var TouchableIcon_1 = require("../../functional/TouchableIcon/TouchableIcon");
var SponsorFullpage_css_1 = require("./SponsorFullpage.css");
var SponsorFullpage_translations_1 = require("./SponsorFullpage.translations");
var getParagraph = function (header, text) {
    if (text) {
        return (<>
                <react_native_1.Text style={SponsorFullpage_css_1.styles.boldHeadline}> {header}</react_native_1.Text>
                <react_native_1.Text style={SponsorFullpage_css_1.styles.blockText}>{text}</react_native_1.Text>
            </>);
    }
    return null;
};
var SponsorFullpage = function (props) {
    var _a = props.sponsor, shortDescr = _a.shortDescr, name = _a.name, logoUri = _a.logoUri, misc = _a.misc, aboutUs = _a.aboutUs, email = _a.email, website = _a.website, youtube = _a.youtube, facebook = _a.facebook, linkedin = _a.linkedin, instagram = _a.instagram;
    return (<react_native_1.View>
            <react_native_color_matrix_image_filters_1.ColorMatrix matrix={[react_native_color_matrix_image_filters_1.grayscale(1), react_native_color_matrix_image_filters_1.brightness(0.5)]}>
                <react_native_fast_image_1.default style={[SponsorFullpage_css_1.styles.topBar, SponsorFullpage_css_1.styles.shadow]} source={{
        priority: react_native_fast_image_1.default.priority.normal,
        uri: props.challengeBgImage.uri,
    }}>
                    <react_native_1.View style={SponsorFullpage_css_1.styles.socialMedia}>
                        {linkedin ? <TouchableIcon_1.TouchableIcon icon={'linkedin'} onPress={function () { return react_native_1.Linking.openURL(linkedin); }} containerStyle={SponsorFullpage_css_1.styles.icon}/> : null}
                        {facebook ? <TouchableIcon_1.TouchableIcon icon={'facebook'} onPress={function () { return react_native_1.Linking.openURL(facebook); }} containerStyle={SponsorFullpage_css_1.styles.icon}/> : null}
                        {instagram ? (<TouchableIcon_1.TouchableIcon icon={'instagram'} onPress={function () { return react_native_1.Linking.openURL(instagram); }} containerStyle={SponsorFullpage_css_1.styles.icon}/>) : null}
                        {youtube ? <TouchableIcon_1.TouchableIcon icon={'youtube'} onPress={function () { return react_native_1.Linking.openURL(youtube); }} containerStyle={SponsorFullpage_css_1.styles.icon}/> : null}
                    </react_native_1.View>

                    <react_native_1.Text style={SponsorFullpage_css_1.styles.sponsorName}> #{name.toLowerCase()} </react_native_1.Text>

                    <react_native_1.View style={[SponsorFullpage_css_1.styles.roundImageContainer, SponsorFullpage_css_1.styles.shadow]}>
                        <react_native_fast_image_1.default source={{
        priority: react_native_fast_image_1.default.priority.high,
        uri: logoUri.uri,
    }} style={SponsorFullpage_css_1.styles.imageStyle} resizeMode={'contain'}/>
                    </react_native_1.View>
                </react_native_fast_image_1.default>
            </react_native_color_matrix_image_filters_1.ColorMatrix>

            <react_native_1.ScrollView style={{ marginBottom: GlobalStyles_css_1.BOTTOM_TABBAR_MARGIN }}>
                <react_native_1.View>
                    {getParagraph(name, shortDescr)}
                    {getParagraph(MultiLingualityController_1.t(SponsorFullpage_translations_1.default.headers.whySponsor), props.whySponsor)}
                    {getParagraph(MultiLingualityController_1.t(SponsorFullpage_translations_1.default.headers.aboutUs), aboutUs)}
                    {getParagraph(MultiLingualityController_1.t(SponsorFullpage_translations_1.default.headers.misc), misc)}

                    {website || email ? (<>
                            <react_native_1.Text style={SponsorFullpage_css_1.styles.boldHeadline}> Kontakt</react_native_1.Text>
                            <react_native_1.View style={SponsorFullpage_css_1.styles.buttonContainer}>
                                {website ? (<MajorButton_1.MajorButton title={MultiLingualityController_1.t(SponsorFullpage_translations_1.default.btn.website)} btnType={MajorButton_1.MajorBtnType.SECONDARY} onPress={function () { return react_native_1.Linking.openURL(website); }} icon='globe'/>) : null}
                                {email ? (<MajorButton_1.MajorButton title={MultiLingualityController_1.t(SponsorFullpage_translations_1.default.btn.email)} btnType={MajorButton_1.MajorBtnType.SECONDARY} onPress={function () { return react_native_1.Linking.openURL("mailto:" + email); }} icon='envelope'/>) : null}
                            </react_native_1.View>
                        </>) : null}
                </react_native_1.View>
            </react_native_1.ScrollView>
        </react_native_1.View>);
};
exports.default = react_navigation_props_mapper_1.withMappedNavigationParams()(SponsorFullpage);
//# sourceMappingURL=SponsorFullpage.js.map