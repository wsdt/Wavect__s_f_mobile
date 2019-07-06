import * as React from "react"
import {TouchableOpacity} from "react-native"
import {SocialIcon} from "react-native-elements"
import p from "../../../../controllers/parseScss"
import {ITestFunctionalComponentProps} from "./TestFunctionalComponent.props"
import * as styles from "./TestFunctionalComponent.scss"

/** This test component shows a clickable social icon */
export const TestFunctionalComponent = (props: ITestFunctionalComponentProps): JSX.Element => {
    return (
        <TouchableOpacity onPress={() => props.authCallback}>
            <SocialIcon
                type={props.socialType}
                button
                light
                style={p(styles.gridElem)}
            />
        </TouchableOpacity>
    )
}
