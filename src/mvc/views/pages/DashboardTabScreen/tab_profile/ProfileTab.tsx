import * as React from "react"
import {Text} from "react-native"
import {BaseTab} from "../../BaseTab/BaseTab"

/** This test component shows a clickable social icon */
export const ProfileTab = (props: any): JSX.Element => {
    return (
        <BaseTab>
            <Text>Your profile here</Text>
        </BaseTab>
    )
}
