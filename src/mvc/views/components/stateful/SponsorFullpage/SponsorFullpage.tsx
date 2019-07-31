import React from "react"
import { Image, Linking, ScrollView, Text, View } from "react-native"
import { withMappedNavigationParams } from "react-navigation-props-mapper"
import { MajorBtnType, MajorButton } from "../../functional/MajorButton/MajorButton"
import { TouchableIcon } from "../../functional/TouchableIcon/TouchableIcon"
import { styles } from "./SponsorFullpage.css"
import { SponsorFullpageProps } from "./SponsorFullpage.props"

const SponsorFullpage: React.FunctionComponent<SponsorFullpageProps> = props => {
    const { shortDescr, logoUri, email, website, youtube, facebook, linkedin, instagram } = props.sponsor

    return (
        <View>
            <View style={styles.topBar}>
                <View style={styles.socialMedia}>
                    {linkedin ? <TouchableIcon icon={"linkedin"} onPress={() => Linking.openURL(linkedin)} style={styles.icon} /> : null}
                    {facebook ? <TouchableIcon icon={"facebook"} onPress={() => Linking.openURL(facebook)} style={styles.icon} /> : null}
                    {instagram ? <TouchableIcon icon={"instagram"} onPress={() => Linking.openURL(instagram)} style={styles.icon} /> : null}
                    {youtube ? <TouchableIcon icon={"youtube"} onPress={() => Linking.openURL(youtube)} style={styles.icon} /> : null}
                </View>

                <Text style={styles.sponsorName}> #redbull </Text>

                <View style={styles.roundImageContainer}>
                    <Image source={logoUri} style={styles.imageStyle} resizeMode={"contain"} />
                </View>
            </View>

            <ScrollView>
                <View>
                    <Text style={styles.boldHeadline}> Wer sind wir: </Text>
                    <Text style={styles.blockText}>{shortDescr}</Text>

                    <Text style={styles.boldHeadline}> Kontaktiere uns doch einfach: </Text>

                    <View style={styles.buttonContainer}>
                        <MajorButton title={"Website"} btnType={MajorBtnType.SECONDARY} onPress={() => Linking.openURL(website)} icon="globe" />
                        <MajorButton
                            title={"Email"}
                            btnType={MajorBtnType.SECONDARY}
                            onPress={() => Linking.openURL(`mailto:${email}`)}
                            icon="envelope"
                        />
                    </View>
                    <Text style={styles.boldHeadline}> Über uns </Text>
                    <Text style={styles.blockText}>
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
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default withMappedNavigationParams()(SponsorFullpage)
