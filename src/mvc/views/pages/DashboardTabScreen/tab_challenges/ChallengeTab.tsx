import * as React from "react"
import {Text} from "react-native"
import {BaseTab} from "../../BaseTab/BaseTab"

/** This test component shows a clickable social icon */
export const ChallengeTab = (props: any): JSX.Element => {
    return (
        <BaseTab>
            <Text>Your challenges here</Text>
        </BaseTab>
    )
}
