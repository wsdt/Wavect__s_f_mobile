import React from "react"
import { Linking, ScrollView, View} from "react-native"
import { Image, Text } from "react-native-elements"
import { withMappedNavigationParams } from "react-navigation-props-mapper"
import { MajorBtnType, MajorButton } from "../../functional/MajorButton/MajorButton"
import { TouchableIcon } from "../../functional/TouchableIcon/TouchableIcon"
import { styles } from "./SponsorFullpage.css"
import { ISponsorFullpageProps } from "./SponsorFullpage.props"

const SponsorFullpage: React.FunctionComponent<ISponsorFullpageProps> = props => {
    const { shortDescr, logoUri, email, website, youtube, facebook, linkedin, instagram } = props.sponsor

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Image source={logoUri} containerStyle={styles.imageContainer} style={styles.imageStyle} resizeMode="contain" />
                {/* <Text style={styles.heading}> {sponsorName}</Text> */}

                <View style={styles.hr_line} />

                <Text style={styles.boldCenteredText}> Wer sind wir? </Text>
                <Text style={styles.subline}> {shortDescr} </Text>

                <View style={styles.hr_line} />

                <Text style={styles.boldCenteredText}> Warum sponsern wir? </Text>
                <Text style={styles.subline}> {props.whySponsor} </Text>

                <View style={styles.hr_line} />
                <Text style={styles.boldCenteredText}> Du kannst uns jederzeit kontaktieren! </Text>

                <View style={styles.buttonContainer}>
                    <MajorButton title={"Website"} btnType={MajorBtnType.SECONDARY} onPress={() => Linking.openURL(website)} icon="globe" />
                    <MajorButton
                        title={"Email"}
                        btnType={MajorBtnType.SECONDARY}
                        onPress={() => Linking.openURL(`mailto:${email}`)}
                        icon="envelope"
                    />
                </View>

                <View style={styles.socialMedia}>
                    {linkedin ? <TouchableIcon icon={"linkedin"} onPress={() => Linking.openURL(linkedin)} /> : null}
                    {facebook ? <TouchableIcon icon={"facebook"} onPress={() => Linking.openURL(facebook)} /> : null}
                    {instagram ? <TouchableIcon icon={"instagram"} onPress={() => Linking.openURL(instagram)} /> : null}
                    {youtube ? <TouchableIcon icon={"youtube"} onPress={() => Linking.openURL(youtube)} /> : null}
                </View>
            </View>
        </ScrollView>
    )
}

export default withMappedNavigationParams()(SponsorFullpage)
