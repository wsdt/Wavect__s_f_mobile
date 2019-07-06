import React from "react"
import { TouchableOpacity } from "react-native"
import { Image, Text, Tooltip } from "react-native-elements"
import { CHALLENGE_CATEGORIES } from "../../../../models/ChallengeCategory"
import globalStyles, { GREY } from "../../../GlobalStyles.css"
import styles from "./ChallengeTypeIcon.css"
import { IChallengeTypeIconProps } from "./ChallengeTypeIcon.props"

export const ChallengeTypeIcon: React.FunctionComponent<IChallengeTypeIconProps> = props => {
    return (
        <TouchableOpacity style={styles.touchableContainer}>
            <Tooltip
                popover={<Text style={globalStyles.tooltipText}>{CHALLENGE_CATEGORIES[props.type].descr}</Text>}
                backgroundColor={GREY}
                height={135}
            >
                <Image source={CHALLENGE_CATEGORIES[props.type].icon} containerStyle={styles.imageContainer} style={styles.image} />
            </Tooltip>
        </TouchableOpacity>
    )
}
