"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SponsorFullpage2_css_1 = require("./SponsorFullpage2.css");
var react_native_1 = require("react-native");
var react_navigation_props_mapper_1 = require("react-navigation-props-mapper");
var TouchableIcon_1 = require("../../functional/TouchableIcon/TouchableIcon");
var SponsorFullpage2 = function (props) {
    var _a = props.sponsor, shortDescr = _a.shortDescr, logoUri = _a.logoUri, email = _a.email, website = _a.website, youtube = _a.youtube, facebook = _a.facebook, linkedin = _a.linkedin, instagram = _a.instagram;
    return (<react_native_1.View style={SponsorFullpage2_css_1.styles.centered}>
            <react_native_1.Animated.View style={SponsorFullpage2_css_1.styles.topBar}>
                <react_native_1.View style={SponsorFullpage2_css_1.styles.socialMedia}>
                    {linkedin ? <TouchableIcon_1.TouchableIcon icon={"linkedin"} onPress={function () { return react_native_1.Linking.openURL(linkedin); }}/> : null}
                    {facebook ? <TouchableIcon_1.TouchableIcon icon={"facebook"} onPress={function () { return react_native_1.Linking.openURL(facebook); }}/> : null}
                    {instagram ? <TouchableIcon_1.TouchableIcon icon={"instagram"} onPress={function () { return react_native_1.Linking.openURL(instagram); }}/> : null}
                    {youtube ? <TouchableIcon_1.TouchableIcon icon={"youtube"} onPress={function () { return react_native_1.Linking.openURL(youtube); }}/> : null}
                </react_native_1.View>
            </react_native_1.Animated.View>

            <react_native_1.ScrollView>
                <react_native_1.View style={SponsorFullpage2_css_1.styles.roundImageContainer}>
                    <react_native_1.Image source={logoUri} style={SponsorFullpage2_css_1.styles.imageStyle} resizeMode={"contain"}>
                    </react_native_1.Image>
                </react_native_1.View>

                <react_native_1.Text style={SponsorFullpage2_css_1.styles.boldHeadline}> Wer sind wir: </react_native_1.Text>
                <react_native_1.Text style={{ fontSize: 15, marginTop: 10 }}>{shortDescr}</react_native_1.Text>

                <react_native_1.Text style={SponsorFullpage2_css_1.styles.boldHeadline}> Kontaktiere uns einfach: </react_native_1.Text>
                <react_native_1.Text style={{ fontSize: 15, marginTop: 10 }}>{email}</react_native_1.Text>

            </react_native_1.ScrollView>
        </react_native_1.View>);
};
exports.default = react_navigation_props_mapper_1.withMappedNavigationParams()(SponsorFullpage2);
//# sourceMappingURL=SponsorFullpage2.js.map