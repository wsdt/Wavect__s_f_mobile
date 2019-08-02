import React from "react"
import {Linking, ScrollView, Text, View} from "react-native"
import {brightness, ColorMatrix, grayscale} from "react-native-color-matrix-image-filters"
import FastImage from "react-native-fast-image"
import {withMappedNavigationParams} from "react-navigation-props-mapper"
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton"
import {TouchableIcon} from "../../functional/TouchableIcon/TouchableIcon"
import {styles} from "./SponsorFullpage.css"
import {SponsorFullpageProps} from "./SponsorFullpage.props"

const SponsorFullpage: React.FunctionComponent<SponsorFullpageProps> = props => {
    const {shortDescr, name, logoUri, misc, aboutUs, email, website, youtube, facebook, linkedin, instagram} = props.sponsor

    return (

        <View>
            <ColorMatrix matrix={[grayscale(1), brightness(0.5)]}>
                <FastImage
                    style={[styles.topBar, styles.shadow]}
                    source={{
                        priority: FastImage.priority.normal,
                        uri: props.challengeBgImage.uri,
                    }}>
                    <View style={styles.socialMedia}>
                        {linkedin ? <TouchableIcon icon={"linkedin"} onPress={() => Linking.openURL(linkedin)}
                                                   style={styles.icon}/> : null}
                        {facebook ? <TouchableIcon icon={"facebook"} onPress={() => Linking.openURL(facebook)}
                                                   style={styles.icon}/> : null}
                        {instagram ? <TouchableIcon icon={"instagram"} onPress={() => Linking.openURL(instagram)}
                                                    style={styles.icon}/> : null}
                        {youtube ? <TouchableIcon icon={"youtube"} onPress={() => Linking.openURL(youtube)}
                                                  style={styles.icon}/> : null}
                    </View>

                    <Text style={styles.sponsorName}> #{name.toLowerCase()} </Text>

                    <View style={[styles.roundImageContainer, styles.shadow]}>
                    <FastImage source={{
                        priority: FastImage.priority.high,
                        uri: logoUri.uri,}} style={styles.imageStyle} resizeMode={"contain"}/>
                    </View>
                </FastImage>
            </ColorMatrix>


            <ScrollView>
                <View>
                    <Text style={styles.boldHeadline}> Über Uns</Text>
                    <Text style={styles.blockText}>{shortDescr}</Text>

                    <Text style={styles.boldHeadline}> Kontakt</Text>

                    <View style={styles.buttonContainer}>
                        <MajorButton title={"Website"} btnType={MajorBtnType.SECONDARY}
                                     onPress={() => Linking.openURL(website)} icon="globe"/>
                        <MajorButton
                            title={"Email"}
                            btnType={MajorBtnType.SECONDARY}
                            onPress={() => Linking.openURL(`mailto:${email}`)}
                            icon="envelope"
                        />
                    </View>
                    <Text style={styles.boldHeadline}> Wissenswertes</Text>
                    <Text style={styles.blockText}>{misc}</Text>
                    <Text style={styles.boldHeadline}> Über uns </Text>
                    <Text style={styles.blockText}>{aboutUs}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default withMappedNavigationParams()(SponsorFullpage)
