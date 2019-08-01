"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_navigation_props_mapper_1 = require("react-navigation-props-mapper");
var MajorButton_1 = require("../../functional/MajorButton/MajorButton");
var TouchableIcon_1 = require("../../functional/TouchableIcon/TouchableIcon");
var SponsorFullpage_css_1 = require("./SponsorFullpage.css");
var SponsorFullpage = function (props) {
    var _a = props.sponsor, shortDescr = _a.shortDescr, logoUri = _a.logoUri, email = _a.email, website = _a.website, youtube = _a.youtube, facebook = _a.facebook, linkedin = _a.linkedin, instagram = _a.instagram;
    return (<react_native_1.View>
            <react_native_1.View style={SponsorFullpage_css_1.styles.topBar}>
                <react_native_1.View style={SponsorFullpage_css_1.styles.socialMedia}>
                    {linkedin ? <TouchableIcon_1.TouchableIcon icon={"linkedin"} onPress={function () { return react_native_1.Linking.openURL(linkedin); }} style={SponsorFullpage_css_1.styles.icon}/> : null}
                    {facebook ? <TouchableIcon_1.TouchableIcon icon={"facebook"} onPress={function () { return react_native_1.Linking.openURL(facebook); }} style={SponsorFullpage_css_1.styles.icon}/> : null}
                    {instagram ? <TouchableIcon_1.TouchableIcon icon={"instagram"} onPress={function () { return react_native_1.Linking.openURL(instagram); }} style={SponsorFullpage_css_1.styles.icon}/> : null}
                    {youtube ? <TouchableIcon_1.TouchableIcon icon={"youtube"} onPress={function () { return react_native_1.Linking.openURL(youtube); }} style={SponsorFullpage_css_1.styles.icon}/> : null}
                </react_native_1.View>

                <react_native_1.Text style={SponsorFullpage_css_1.styles.sponsorName}> #redbull </react_native_1.Text>

                <react_native_1.View style={SponsorFullpage_css_1.styles.roundImageContainer}>
                    <react_native_1.Image source={logoUri} style={SponsorFullpage_css_1.styles.imageStyle} resizeMode={"contain"}/>
                </react_native_1.View>
            </react_native_1.View>

            <react_native_1.ScrollView>
                <react_native_1.View>
                    <react_native_1.Text style={SponsorFullpage_css_1.styles.boldHeadline}> Wer sind wir: </react_native_1.Text>
                    <react_native_1.Text style={SponsorFullpage_css_1.styles.blockText}>{shortDescr}</react_native_1.Text>

                    <react_native_1.Text style={SponsorFullpage_css_1.styles.boldHeadline}> Kontaktiere uns doch einfach: </react_native_1.Text>

                    <react_native_1.View style={SponsorFullpage_css_1.styles.buttonContainer}>
                        <MajorButton_1.MajorButton title={"Website"} btnType={MajorButton_1.MajorBtnType.SECONDARY} onPress={function () { return react_native_1.Linking.openURL(website); }} icon="globe"/>
                        <MajorButton_1.MajorButton title={"Email"} btnType={MajorButton_1.MajorBtnType.SECONDARY} onPress={function () { return react_native_1.Linking.openURL("mailto:" + email); }} icon="envelope"/>
                    </react_native_1.View>
                    <react_native_1.Text style={SponsorFullpage_css_1.styles.boldHeadline}> Wissenswertes </react_native_1.Text>
                    <react_native_1.Text style={SponsorFullpage_css_1.styles.blockText}>
                        {" "}
                        Die Idee für taurinhaltige Getränke kam aus Japan, wo sie im Zweiten Weltkrieg japanischen Piloten zur Steigerung der Leistung
                        verabreicht wurden. Aus Thailand importierte der Gründer der Red Bull GmbH, Dietrich Mateschitz, später die Idee nach Europa.
                        Bei einem Besuch 1982 in Thailand stellte er fest, dass ihm ein Getränk namens Krating Daeng half, den Einfluss des Jetlags zu
                        überwinden.[2] Zusammen mit dem Thailänder Yoovidhya Chalerm gründete Mateschitz in Österreich die Red Bull GmbH, sie
                        übernahmen Marketingkonzept und Grundrezeptur, passten diese dem westlichen Geschmack an und gingen damit 1987 auf den
                        europäischen Markt. Ende der 1980er Jahre wurde Red Bull vor allem durch geschicktes Marketing in der alternativen Jugend- und
                        Club-Szene (Techno, Mountainbiking, Snowboarding) erfolgreich. Von Beginn an wurde über gesundheitliche Gefahren sowie
                        langwierige Zulassungsverfahren für einzelne Inhaltsstoffe diskutiert. Dadurch verzögerte sich die Marktzulassung in
                        Österreich und später in Deutschland und anderen Ländern. Mitunter wurde dies in manchen Medien als Verbot kolportiert. Es
                        entstand wiederum ein „Hype“ um dieses für den europäischen Markt neue Getränk. In Frankreich blieb der Energy Drink
                        tatsächlich verboten, bis Red Bull 2008 das Taurin durch Arginin ersetzte. Die französischen Behörden stützten dieses Verbot
                        auf angebliche Gesundheitsschäden durch den übermäßigen Konsum von Red Bull. Der Europäische Gerichtshof entschied 2004, dass
                        das französische Verkaufsverbot nicht gegen die Warenverkehrsfreiheit verstößt. Ähnliche Verbote bestanden bis Anfang 2009 in
                        Dänemark und Norwegen. Im Mai 2008 wurde ein Abkommen zur Wiederzulassung von Red Bull mit Taurin in Frankreich unterzeichnet
                        und seit 15. Juli 2008 ist das originale Getränk wieder erhältlich.[3][4] Red Bull hat keine eigenen Produktionsstätten,
                        sondern lässt das Getränk bei der Firma Rauch Fruchtsäfte in Nüziders[5] (Vorarlberg) produzieren und abfüllen. Für den Export
                        wird Red Bull nicht als Konzentrat produziert, sondern fertig in Dosen abgefüllt nach Übersee exportiert. Für den
                        amerikanischen Markt wird es von Rauch in der Schweiz abgefüllt, wo ein Werk in Widnau SG errichtet wurde. Dieser Standort
                        wurde gewählt, um bei Handelsstreitigkeiten zwischen der EU und den USA nicht betroffen zu sein.[6]{" "}
                    </react_native_1.Text>
                </react_native_1.View>
            </react_native_1.ScrollView>
        </react_native_1.View>);
};
exports.default = react_navigation_props_mapper_1.withMappedNavigationParams()(SponsorFullpage);
//# sourceMappingURL=SponsorFullpage.js.map