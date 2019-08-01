import React from 'react'
import {Linking, ScrollView, Text, View} from 'react-native'
import {Image} from "react-native-elements"
import {withMappedNavigationParams} from 'react-navigation-props-mapper'
import {MajorBtnType, MajorButton} from '../../functional/MajorButton/MajorButton'
import {TouchableIcon} from '../../functional/TouchableIcon/TouchableIcon'
import {styles} from './SponsorFullpage.css'
import {SponsorFullpageProps} from './SponsorFullpage.props'

const SponsorFullpage: React.FunctionComponent<SponsorFullpageProps> = props => {
    const {shortDescr, name, logoUri, misc, aboutUs, email, website, youtube, facebook, linkedin, instagram} = props.sponsor

    return (
        <View>
            <View style={styles.topBar}>
                <View style={styles.socialMedia}>
                    {linkedin ? <TouchableIcon icon={'linkedin'} onPress={() => Linking.openURL(linkedin)}
                                               style={styles.icon}/> : null}
                    {facebook ? <TouchableIcon icon={'facebook'} onPress={() => Linking.openURL(facebook)}
                                               style={styles.icon}/> : null}
                    {instagram ? <TouchableIcon icon={'instagram'} onPress={() => Linking.openURL(instagram)}
                                                style={styles.icon}/> : null}
                    {youtube ? <TouchableIcon icon={'youtube'} onPress={() => Linking.openURL(youtube)}
                                              style={styles.icon}/> : null}
                </View>

                <Text style={styles.sponsorName}> #{name.toLowerCase()} </Text>

                <Image source={logoUri} containerStyle={styles.roundImageContainer} style={styles.imageStyle}
                       resizeMode={'contain'}/>

            </View>

            <ScrollView>
                <View>
                    <Text style={styles.boldHeadline}> Wer sind wir: </Text>
                    <Text style={styles.blockText}>{shortDescr}</Text>

                    <Text style={styles.boldHeadline}> Kontaktiere uns doch einfach: </Text>

                    <View style={styles.buttonContainer}>
                        <MajorButton title={'Website'} btnType={MajorBtnType.SECONDARY}
                                     onPress={() => Linking.openURL(website)} icon="globe"/>
                        <MajorButton
                            title={'Email'}
                            btnType={MajorBtnType.SECONDARY}
                            onPress={() => Linking.openURL(`mailto:${email}`)}
                            icon="envelope"
                        />
                    </View>
                    <Text style={styles.boldHeadline}> Wissenswertes </Text>
                    <Text style={styles.blockText}>{misc}</Text>
                    <Text style={styles.boldHeadline}> Über uns </Text>
                    <Text style={styles.blockText}>{aboutUs}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default withMappedNavigationParams()(SponsorFullpage)
