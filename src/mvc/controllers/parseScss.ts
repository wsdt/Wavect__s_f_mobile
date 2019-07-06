/**
 * This minimal function was made for better readability.
 *
 * Scss is imported like this:
 *      import * as styleBase from "../../scss/base.scss"
 *
 * Style params of react native props require an object of type StyleProps<ViewStyle>.
 * As our scss parser generates a defintion file for each scss-file (but with strings)
 * we get a warning when assigning a value to the style property like this:
 *
 *      <View style={styleBase.container}>
 *
 * The styling works despite the warning. To remove the warning we have to cast the style each time, like this:
 *      <View style={(styleBase.container as StyleProp<ViewStyle>)}>
 *
 * To avoid such long unnecessary castings I made this function (with a short name). So, we can do this:
 *      <View style={p(styleBase.container)}>
 */
import { StyleProp, ViewStyle } from "react-native"

function p(parseableStyle: string): StyleProp<ViewStyle> {
    return parseableStyle as StyleProp<ViewStyle>
}

export default p

// LAYOUT: https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c
// FORM VALIDATOR YUP: TODO: https://medium.com/fotontech/react-native-formik-yup-%EF%B8%8F-18465e020ea0
// OAUTH FIREBASE (EASY AND COMPLETELY FREE): TODO: https://console.firebase.google.com/project/bekind-ff90c/authentication/providers
// TODO: Localization -> react-native-localization
// TODO: React navigation -> "react-navigation", or other package? Routes?
// https://medium.com/@jan.hesters/unleash-the-power-of-easy-and-efficient-forms-in-react-native-with-formik-and-yup-9210e43794eb

/** IMPORTANT NOTE: The current SCSS parser does not support inheritance! Thus, please do not nest css classes! */
