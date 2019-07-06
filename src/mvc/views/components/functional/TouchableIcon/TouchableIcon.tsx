import React from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import { ITouchableIconProps } from "./ITouchableIcon.props"

export const TouchableIcon: React.FunctionComponent<ITouchableIconProps> = props => {
    const { icon, onPress } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name={icon} type="font-awesome" />
        </TouchableOpacity>
    )
}
