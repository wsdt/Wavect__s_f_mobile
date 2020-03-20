
import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FontType } from './AppText.enum'
import { IAPPProps } from './AppText.props'


export const AppText: React.FunctionComponent<IAPPProps> = props => {
    const styleSheet = StyleSheet.create({
        // if nothing added, this is the standard font type
        standard: {
            fontFamily: FontType.STANDARD,
            fontSize: 20,
        },

        // define custom font details
        custom: {
            fontFamily: props.font,
            fontSize: 23,
        },
    })

    const textStyle = props.font ? styleSheet.custom : styleSheet.standard

    return (
        <Text style={[textStyle, props.style]} onPress={props.onPress}>
            {props.children}
        </Text>
    )
}



