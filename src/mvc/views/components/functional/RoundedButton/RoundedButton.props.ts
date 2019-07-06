import { StyleProp } from "react-native"

export interface IRoundedButtonProps {
    title: string
    press: VoidFunction
    containerStyle: StyleProp<any>
}
