import React from 'react'
import { Linking, ScrollView, Text, View } from 'react-native'
import { brightness, ColorMatrix, grayscale } from 'react-native-color-matrix-image-filters'
import FastImage from 'react-native-fast-image'
import { withMappedNavigationParams } from 'react-navigation-props-mapper'
import * as _schema from '../../../../../assets/translations/_schema.json'
import { t } from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import { BOTTOM_TABBAR_MARGIN } from '../../../GlobalStyles.css'
import { MajorBtnType, MajorButton } from '../../functional/MajorButton/MajorButton'
import { TouchableIcon } from '../../functional/TouchableIcon/TouchableIcon'
import { styles } from './SponsorFullpage.css'
import { SponsorFullpageProps } from './SponsorFullpage.props'

const getParagraph = (header:string, text:string) => {
    if (text) {
        return <><Text style={styles.boldHeadline}> {header}</Text>
            <Text style={styles.blockText}>{text}</Text></>
    }
    return null
}

const SponsorFullpage: React.FunctionComponent<SponsorFullpageProps> = props => {
    const { shortDescr, name, logoUri, misc, aboutUs, email, website, youtube, facebook, linkedin, instagram } = props.sponsor

    return (
        <View>
            <ColorMatrix matrix={[grayscale(1), brightness(0.5)]}>
                <FastImage
                    style={[styles.topBar, styles.shadow]}
                    source={{
                        priority: FastImage.priority.normal,
                        uri: props.challengeBgImage.uri,
                    }}
                >
                    <View style={styles.socialMedia}>
                        {linkedin ? <TouchableIcon icon={'linkedin'} onPress={() => Linking.openURL(linkedin)} containerStyle={styles.icon} /> : null}
                        {facebook ? <TouchableIcon icon={'facebook'} onPress={() => Linking.openURL(facebook)} containerStyle={styles.icon} /> : null}
                        {instagram ? (
                            <TouchableIcon icon={'instagram'} onPress={() => Linking.openURL(instagram)} containerStyle={styles.icon} />
                        ) : null}
                        {youtube ? <TouchableIcon icon={'youtube'} onPress={() => Linking.openURL(youtube)} containerStyle={styles.icon} /> : null}
                    </View>

                    <Text style={styles.sponsorName}> #{name.toLowerCase()} </Text>

                    <View style={[styles.roundImageContainer, styles.shadow]}>
                        <FastImage
                            source={{
                                priority: FastImage.priority.high,
                                uri: logoUri.uri,
                            }}
                            style={styles.imageStyle}
                            resizeMode={'contain'}
                        />
                    </View>
                </FastImage>
            </ColorMatrix>

            <ScrollView style={{ marginBottom: BOTTOM_TABBAR_MARGIN }}>
                <View>
                    {getParagraph(name, shortDescr)}
                    {getParagraph(t(_schema.homescreen.sponsor_fullpage.headers.whySponsor), props.whySponsor)}
                    {getParagraph(t(_schema.homescreen.sponsor_fullpage.headers.aboutUs), aboutUs)}
                    {getParagraph(t(_schema.homescreen.sponsor_fullpage.headers.misc), misc)}

                    {website || email ? (
                        <>
                            <Text style={styles.boldHeadline}> Kontakt</Text>
                            <View style={styles.buttonContainer}>
                                {website ? (
                                    <MajorButton
                                        title={t(_schema.homescreen.sponsor_fullpage.btn.website)}
                                        btnType={MajorBtnType.SECONDARY}
                                        onPress={() => Linking.openURL(website)}
                                        icon='globe'
                                    />
                                ) : null}
                                {email ? (
                                    <MajorButton
                                        title={t(_schema.homescreen.sponsor_fullpage.btn.email)}
                                        btnType={MajorBtnType.SECONDARY}
                                        onPress={() => Linking.openURL(`mailto:${email}`)}
                                        icon='envelope'
                                    />
                                ) : null}
                            </View>
                        </>
                    ) : null}
                </View>
            </ScrollView>
        </View>
    )
}

export default withMappedNavigationParams()(SponsorFullpage)
