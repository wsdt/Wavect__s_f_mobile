import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, Text, Tooltip } from 'react-native-elements'
import {t} from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import { CHALLENGE_CATEGORIES } from '../../../../models/ChallengeCategory'
import globalStyles, { GREY } from '../../../GlobalStyles.css'
import styles, { BG_COLOR } from './ChallengeTypeIcon.css'
import { IChallengeTypeIconProps } from './ChallengeTypeIcon.props'

export const ChallengeTypeIcon: React.FunctionComponent<IChallengeTypeIconProps> = props => {
    const currColor = props.isGrayscale ? GREY : BG_COLOR
    return (
        <TouchableOpacity style={styles.touchableContainer}>
            <Tooltip
                popover={<Text style={globalStyles.tooltipText}>{CHALLENGE_CATEGORIES(t)[props.type].descr}</Text>}
                backgroundColor={currColor}
                height={120}
            >
                <Image
                    source={CHALLENGE_CATEGORIES(t)[props.type].icon}
                    containerStyle={[styles.imageContainer, { backgroundColor: currColor }]}
                    style={styles.image}
                />
            </Tooltip>
        </TouchableOpacity>
    )
}

