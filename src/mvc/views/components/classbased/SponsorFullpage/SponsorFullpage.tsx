import React, {PureComponent} from 'react'
import {Image, ImageBackground, Linking, ScrollView, View} from 'react-native'
import {Card} from 'react-native-elements'
import {withMappedNavigationParams} from 'react-navigation-props-mapper'
import {t} from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import globalStyles from '../../../GlobalStyles.css'
import {AppText} from '../../functional/AppText/AppText'
import {FontType} from '../../functional/AppText/AppText.enum'
import {MajorBtnType, MajorButton} from '../../functional/MajorButton/MajorButton'
import {TouchableIcon} from '../../functional/TouchableIcon/TouchableIcon'
import {styles} from './SponsorFullpage.css'
import {ISponsorFullpageProps} from './SponsorFullpage.props'
import {ISponsorFullpageState} from './SponsorFullpage.state'
import s from './SponsorFullpage.translations'

const getParagraph = (header: string, text: string) => {
    if (text) {
        return (
            <Card title={header} containerStyle={styles.cardStyle} titleStyle={styles.cardTitleStyle}
                  dividerStyle={styles.cardDivider}>
                <AppText style={styles.cardText}>{text}</AppText>
            </Card>
        )
    }
    return null
}

class SponsorFullpage extends PureComponent<ISponsorFullpageProps, ISponsorFullpageState> {

    public render() {
        const {shortDescr, name, logoUri, misc, aboutUs, email, website, youtube, facebook, linkedin, instagram, coverUri} = this.props.sponsor

        return (
            <View>
                    <ImageBackground
                        style={[styles.topBar, globalStyles.shadow]}
                        source={coverUri}>
                        <View style={styles.socialMedia}>
                            {linkedin ? <TouchableIcon icon={'linkedin'} onPress={() => Linking.openURL(linkedin)}
                                                       containerStyle={styles.icon}/> : null}
                            {facebook ? <TouchableIcon icon={'facebook'} onPress={() => Linking.openURL(facebook)}
                                                       containerStyle={styles.icon}/> : null}
                            {instagram ? (
                                <TouchableIcon icon={'instagram'} onPress={() => Linking.openURL(instagram)}
                                               containerStyle={styles.icon}/>
                            ) : null}
                            {youtube ? <TouchableIcon icon={'youtube'} onPress={() => Linking.openURL(youtube)}
                                                      containerStyle={styles.icon}/> : null}
                        </View>

                        <AppText style={styles.sponsorName} font={FontType.COND_LIGHT_OBL}>
                            #{name.toLowerCase()}
                        </AppText>

                        <View style={[styles.roundImageContainer, globalStyles.shadow]}>
                            <Image
                                source={{
                                    uri: logoUri.uri,
                                }}
                                style={styles.imageStyle}
                                resizeMode='contain'
                            />
                        </View>
                    </ImageBackground>

                <ScrollView>
                    <View style={{marginBottom: 150}}>
                        {getParagraph(name, shortDescr)}
                        {getParagraph(t(s.headers.whySponsor), this.props.whySponsor)}
                        {getParagraph(t(s.headers.aboutUs), aboutUs)}
                        {getParagraph(t(s.headers.misc), misc)}

                        {website || email ? (
                            <Card title='Kontakt' titleStyle={styles.cardTitleStyle} containerStyle={styles.cardStyle}>
                                <View style={styles.buttonContainer}>
                                    {website ? (
                                        <MajorButton
                                            title={t(s.btn.website)}
                                            btnType={MajorBtnType.SECONDARY}
                                            onPress={() => Linking.openURL(website)}
                                            icon='globe'
                                        />
                                    ) : null}
                                    {email ? (
                                        <MajorButton
                                            title={t(s.btn.email)}
                                            btnType={MajorBtnType.SECONDARY}
                                            onPress={() => Linking.openURL(`mailto:${email}`)}
                                            icon='envelope'
                                        />
                                    ) : null}
                                </View>
                            </Card>
                        ) : null}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default withMappedNavigationParams()(SponsorFullpage)
