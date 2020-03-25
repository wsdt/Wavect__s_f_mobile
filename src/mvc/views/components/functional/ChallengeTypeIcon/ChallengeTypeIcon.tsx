import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Text, Tooltip } from 'react-native-elements'
import { t } from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import { CHALLENGE_CATEGORIES } from '../../../../models/ChallengeCategory'
import globalStyles, { GREY } from '../../../GlobalStyles.css'
import styles, { BG_COLOR } from './ChallengeTypeIcon.css'
import { IChallengeTypeIconProps } from './ChallengeTypeIcon.props'

export const ChallengeTypeIcon: React.FunctionComponent<IChallengeTypeIconProps> = props => {
    const currColor = props.isGrayscale ? GREY : BG_COLOR
    const category = CHALLENGE_CATEGORIES(t, props.type)

    return (
        <TouchableOpacity
            style={styles.touchableContainer}
            accessible={true}
            accessibilityLabel='Challenge Typ'
            accessibilityRole='imagebutton'
            accessibilityHint='Kategorie bzw. Fokus der Herausforderung'>
            <Tooltip popover={<Text style={globalStyles.tooltipText}>{category.descr}</Text>} backgroundColor={currColor} height={105}>
                <View style={[styles.imageContainer, { backgroundColor: currColor }, globalStyles.shadow]}>
                    <Image
                        source={{  uri: category.icon }}
                        style={styles.image}
                    />
                </View>
            </Tooltip>
        </TouchableOpacity>
    )
}
