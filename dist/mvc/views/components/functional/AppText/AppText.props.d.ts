import { FontType } from './AppText.enum';
export interface IAPPProps {
    font?: FontType;
    style?: object;
    onPress?: () => void;
}
