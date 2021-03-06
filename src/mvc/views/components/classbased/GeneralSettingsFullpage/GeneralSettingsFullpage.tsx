import * as React from 'react'
import { Linking, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import * as _schema from '../../../../../assets/translations/_schema.json'
import { ASSET_URL } from '../../../../../globalConfiguration/globalConfig'
import { t } from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import globalStyles from '../../../GlobalStyles.css'
import { AppText } from '../../functional/AppText/AppText'
import { FontType } from '../../functional/AppText/AppText.enum'
import { routes } from '../../system/TabRouter/GeneralSettingsScreenRouter/GeneralSettingsScreenRoutes'
import styles from './GeneralSettingsFullpage.css'

export class GeneralSettingsFullpage extends React.PureComponent<any, any> {

    private listItems = [
        {
            name: t(_schema.settingsscreen.generalsettings.list.personal_settings),
            action: () => this.props.navigation.navigate(routes.PersonalSettingsFullpage),
        },
        {
            name: t(_schema.settingsscreen.generalsettings.list.visit_hp),
            action: () => Linking.openURL('https://wavect.io/'),
        },
        {
            name: t(_schema.settingsscreen.generalsettings.list.privacy_policy),
            action: () => Linking.openURL('https://wavect.io/data-privacy'),
        },
        /* TODO: Create AGB {
            name: t(_schema.settingsscreen.generalsettings.list.agb),
            action: () => Linking.openURL('https://wavect.io/privacy-policy/'),
        },*/
    ];

    public render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <Image
                        source={{
                            uri: `${ASSET_URL}/img/logo.png`,
                        }}
                        style={[styles.image, globalStyles.radius]}
                    />

                    <AppText font={FontType.STANDARD_BOLD} style={{ fontSize: 25 }}>
                        Wavect
                    </AppText>
                </View>

                <View style={styles.navigationView}>
                    {this.listItems.map(item => (
                        <View style={styles.row} key={item.name}>
                            <Icon name={'angle-double-right'} type={'font-awesome'} />
                            <TouchableOpacity style={styles.navItem} key={item.name} onPress={item.action}>
                                <AppText style={styles.itemFont}>{item.name}</AppText>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <AppText style={styles.versionFont}>v. ---</AppText>
            </View>
        )
    }
}

export default withNavigation(GeneralSettingsFullpage)
