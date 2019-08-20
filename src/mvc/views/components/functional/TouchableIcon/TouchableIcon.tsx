import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { ITouchableIconProps } from './ITouchableIcon.props'

export const TouchableIcon: React.FunctionComponent<ITouchableIconProps> = props => {
    const { icon, onPress, containerStyle, iconStyle } = props

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Icon name={icon} type='font-awesome' color='white' iconStyle={iconStyle} />
        </TouchableOpacity>
    )
}
