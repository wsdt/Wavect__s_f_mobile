import { MajorBtnType } from "./MajorButton"

export interface IMajorButtonProps {
    title: string
    btnType: MajorBtnType
    // tslint:disable-next-line:ban-types
    onPress?: () => void
    isLoading?: boolean
    icon?: string
}
