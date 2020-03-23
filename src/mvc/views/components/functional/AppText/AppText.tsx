
import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FontType } from './AppText.enum'
import { IAppTextProps } from './AppText.props'

export const AppText: React.FunctionComponent<IAppTextProps> = (props:IAppTextProps) => {

    // default style or custom provided style
    const textStyle = {fontFamily: props.font ? props.font : FontType.STANDARD,
        fontSize: props.size ? props.size : 20}

    return (
        <Text style={[textStyle, props.style]} onPress={props.onPress}>
            {props.children}
        </Text>
    )
}



