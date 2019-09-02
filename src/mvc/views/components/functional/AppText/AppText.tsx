/**
 * Theres no way to set a default font.. so i've created a Text-Component which we'll have to use
 *
 * IF you change the STANDARD Font, always change it in the ENUM.ts
 */

import * as React from "react"
import { StyleSheet, Text } from "react-native"
import { FontType } from "./AppText.enum"
import { IAPPProps } from "./AppText.props"

export const AppText: React.FunctionComponent<IAPPProps> = props => {
    const styleSheet = StyleSheet.create({
        standard: {
            fontFamily: FontType.STANDARD, // our "main" font for most of the text, only change in ENUM
            fontSize: 20,
        },
        custom: {
            fontFamily: props.font, // if bold/italic needed, add it as prop!
            fontSize: 23,
        },
    })

    const textStyle = props.font ? styleSheet.custom : styleSheet.standard

    return (
        <Text style={[textStyle, props.style]} onPress={props.onPress} >
            {props.children}
        </Text>
    )
}
