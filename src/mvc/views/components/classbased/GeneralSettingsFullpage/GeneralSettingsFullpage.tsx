import * as React from "react"
import { Linking, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { withNavigation } from "react-navigation"
import globalStyles from "../../../GlobalStyles.css"
import { AppText } from "../../functional/AppText/AppText"
import { FontType } from "../../functional/AppText/AppText.enum"
import { routes } from "../../system/TabRouter/HomeScreenRouter/HomeRoutes"
import styles from "./GeneralSettingsFullpage.css"
import { Icon } from "react-native-elements"

export class GeneralSettingsFullpage extends React.PureComponent<any, any> {
    // proper condition of data, todo change the frontend!
    private listItems = [
        {
            name: "Persönliche Daten hinterlegen",
            action: () => this.props.navigation.navigate(routes.PersonalSettingsFullpage),
        },
        {
            name: "Idee für Challenge einreichen",
            action: () => Linking.openURL("https://wordpress.dev.wavect.io/"),
        },
        {
            name: "Homepage besuchen",
            action: () => Linking.openURL("https://wordpress.dev.wavect.io/"),
        },
        {
            name: "Teilnahmebedingungen",
            action: () => Linking.openURL("https://wordpress.dev.wavect.io/privacy-policy/"),
        },
        {
            name: "AGB",
            action: () => Linking.openURL("https://wordpress.dev.wavect.io/privacy-policy/"),
        },
    ]

    public render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <FastImage source={require("../../../../../assets/img/logo_w.png")} style={[styles.image, globalStyles.radius]} />

                    <AppText style={{ fontSize: 10 }}> v.0.5</AppText>
                    <AppText font={FontType.STANDARD_BOLD} style={{ fontSize: 25 }}>
                        Wavect
                    </AppText>
                </View>

                <View style={styles.navigationView}>
                    {this.listItems.map(item => (
                        <View style={styles.row} key={item.name}>
                            <Icon name={"angle-double-right"} type={"font-awesome"} />
                            <TouchableOpacity style={styles.navItem} key={item.name} onPress={item.action}>
                                <AppText style={{ fontSize: 30 }}>{item.name}</AppText>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}

export default withNavigation(GeneralSettingsFullpage)
