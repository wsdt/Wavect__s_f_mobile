"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SponsorFullpage_css_1 = require("./SponsorFullpage.css");
var react_native_1 = require("react-native");
var react_navigation_props_mapper_1 = require("react-navigation-props-mapper");
var TouchableIcon_1 = require("../../functional/TouchableIcon/TouchableIcon");
var MajorButton_1 = require("../../functional/MajorButton/MajorButton");
var SponsorFullpage = function (props) {
    var _a = props.sponsor, shortDescr = _a.shortDescr, logoUri = _a.logoUri, email = _a.email, website = _a.website, youtube = _a.youtube, facebook = _a.facebook, linkedin = _a.linkedin, instagram = _a.instagram;
    return (<react_native_1.View style={SponsorFullpage_css_1.styles.centered}>
            <react_native_1.Animated.View style={SponsorFullpage_css_1.styles.topBar}>
                <react_native_1.View style={SponsorFullpage_css_1.styles.socialMedia}>
                    {linkedin ? <TouchableIcon_1.TouchableIcon icon={"linkedin"} onPress={function () { return react_native_1.Linking.openURL(linkedin); }}/> : null}
                    {facebook ? <TouchableIcon_1.TouchableIcon icon={"facebook"} onPress={function () { return react_native_1.Linking.openURL(facebook); }}/> : null}
                    {instagram ? <TouchableIcon_1.TouchableIcon icon={"instagram"} onPress={function () { return react_native_1.Linking.openURL(instagram); }}/> : null}
                    {youtube ? <TouchableIcon_1.TouchableIcon icon={"youtube"} onPress={function () { return react_native_1.Linking.openURL(youtube); }}/> : null}
                </react_native_1.View>
            </react_native_1.Animated.View>

            <react_native_1.ScrollView>
                <react_native_1.View style={SponsorFullpage_css_1.styles.roundImageContainer}>
                    <react_native_1.Image source={logoUri} style={SponsorFullpage_css_1.styles.imageStyle} resizeMode={"contain"}>
                    </react_native_1.Image>
                </react_native_1.View>

                <react_native_1.Text style={SponsorFullpage_css_1.styles.boldHeadline}> Wer sind wir: </react_native_1.Text>
                <react_native_1.Text style={SponsorFullpage_css_1.styles.centered}>{shortDescr}</react_native_1.Text>

                <react_native_1.Text style={SponsorFullpage_css_1.styles.boldHeadline}> Kontaktiere uns doch einfach: </react_native_1.Text>

                <react_native_1.View style={SponsorFullpage_css_1.styles.buttonContainer}>
                    <MajorButton_1.MajorButton title={"Website"} btnType={MajorButton_1.MajorBtnType.SECONDARY} onPress={function () { return react_native_1.Linking.openURL(website); }} icon="globe"/>
                    <MajorButton_1.MajorButton title={"Email"} btnType={MajorButton_1.MajorBtnType.SECONDARY} onPress={function () { return react_native_1.Linking.openURL("mailto:" + email); }} icon="envelope"/>
                </react_native_1.View>

            </react_native_1.ScrollView>
        </react_native_1.View>);
};
exports.default = react_navigation_props_mapper_1.withMappedNavigationParams()(SponsorFullpage);
//# sourceMappingURL=SponsorFullpage.js.map