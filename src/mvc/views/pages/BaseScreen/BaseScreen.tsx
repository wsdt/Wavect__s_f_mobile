import * as React from "react"
import {View} from "react-native"
import p from "../../../controllers/parseScss"
import * as styles from "./BaseScreen.scss"

export const BaseScreen = (props: any): JSX.Element => {
    /* Pass all children as we want to have custom pages */
    // <SafeAreaView  forceInset={{ top: "always" }}> ==> might be needed in future (getstream, in general for unusual displays etc. (but warnings, input errors?)...
    return <View style={p(styles.page)}>{props.children}</View>
}
