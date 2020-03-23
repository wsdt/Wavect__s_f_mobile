import { FontType } from './AppText.enum'

export interface IAppTextProps {
    font?: FontType
    style?: any
    size?: number
    onPress?: () => void
    children:any
}
