import { MajorBtnType } from './MajorButton';
export interface IMajorButtonProps {
    title: string;
    btnType: MajorBtnType;
    onPress?: () => void;
    onLongPress?: () => void;
    isLoading?: boolean;
    icon?: string;
}
