import React from 'react';
import {SponsorFullpageProps} from "./SponsorFullpage.props";
import { styles } from "./SponsorFullpage.css"
import {View, Image, ScrollView, Text, Animated, Linking} from "react-native";
import {withMappedNavigationParams} from 'react-navigation-props-mapper'
import {TouchableIcon} from "../../functional/TouchableIcon/TouchableIcon";
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton";

const SponsorFullpage: React.FunctionComponent<SponsorFullpageProps> = props => {
    const { shortDescr, logoUri, email, website, youtube, facebook, linkedin, instagram } = props.sponsor

    return (
         <View style={styles.centered}>
            <Animated.View style={styles.topBar}>
                <View style={styles.socialMedia}>
                    {linkedin ? <TouchableIcon icon={"linkedin"} onPress={() => Linking.openURL(linkedin)} /> : null}
                    {facebook ? <TouchableIcon icon={"facebook"} onPress={() => Linking.openURL(facebook)} /> : null}
                    {instagram ? <TouchableIcon icon={"instagram"} onPress={() => Linking.openURL(instagram)} /> : null}
                    {youtube ? <TouchableIcon icon={"youtube"} onPress={() => Linking.openURL(youtube)} /> : null}
                </View>
            </Animated.View>

            <ScrollView>
                <View style={styles.roundImageContainer}>
                    <Image source={logoUri}
                           style={styles.imageStyle}
                           resizeMode={"contain"}>
                    </Image>
                </View>

                <Text style={styles.boldHeadline}> Wer sind wir: </Text>
                <Text style={styles.centered}>{shortDescr}</Text>

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

            </ScrollView>
        </View>
    )
}

export default withMappedNavigationParams()(SponsorFullpage)

