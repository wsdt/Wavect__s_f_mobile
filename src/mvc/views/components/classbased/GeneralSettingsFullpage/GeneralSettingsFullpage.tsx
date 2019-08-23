import * as React from 'react'
import { Linking, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { withNavigation } from 'react-navigation'
import globalStyles from '../../../GlobalStyles.css'
import { AppText } from '../../functional/AppText/AppText'
import { FontType } from '../../functional/AppText/AppText.enum'
import { routes } from '../../system/TabRouter/HomeScreenRouter/HomeRoutes'
import styles from './GeneralSettingsFullpage.css'

export class GeneralSettingsFullpage extends React.PureComponent<any, any> {
    public render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <FastImage source={require('../../../../../assets/img/logo_w.png')} style={[styles.image, globalStyles.radius]} />

                    <AppText style={{ fontSize: 10 }}> v.0.5</AppText>
                    <AppText font={FontType.STANDARD_BOLD} style={{ fontSize: 25 }}>
                        Wavect
                    </AppText>
                </View>

                <View style={styles.navigationView}>
                    <AppText style={styles.navText} onPress={() => this.props.navigation.navigate(routes.PersonalSettingsFullpage)}>
                        Persönliche Daten hinterlegen
                    </AppText>
                    <AppText style={styles.navText} onPress={() => Linking.openURL('https://wordpress.dev.wavect.io/')}>
                        Idee für Challenge einreichen
                    </AppText>
                    <AppText style={styles.navText} onPress={() => Linking.openURL('https://wordpress.dev.wavect.io/')}>
                        Homepage besuchen
                    </AppText>
                    <AppText style={styles.navText} onPress={() => Linking.openURL('https://wordpress.dev.wavect.io/privacy-policy/')}>
                        Teilnahmebedingungen{' '}
                    </AppText>
                    <AppText style={styles.navText} onPress={() => Linking.openURL('https://wordpress.dev.wavect.io/privacy-policy/')}>
                        AGB
                    </AppText>
                </View>
            </View>
        )
    }
}

export default withNavigation(GeneralSettingsFullpage)
