import * as React from "react"
import {View} from "react-native"
import p from "../../../controllers/parseScss"
import * as styles from "./BaseTab.scss"

export const BaseTab = (props: any): JSX.Element => {
    /* Pass all children as we want to have custom tabs */
    return <View style={p(styles.tab)}>{props.children}</View>
}
