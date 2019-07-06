import * as React from "react"
import {Text} from "react-native"
import {BaseTab} from "../../BaseTab/BaseTab"

/** This test component shows a clickable social icon */
export const NewsfeedTab = (props: any): JSX.Element => {
    return (
        <BaseTab>
            <Text>Your newsfeed here</Text>
        </BaseTab>
    )
}
