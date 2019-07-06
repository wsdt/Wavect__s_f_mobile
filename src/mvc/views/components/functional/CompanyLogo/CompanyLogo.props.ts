import { ImageURISource } from "react-native"

export interface ICompanyLogoProps {
    companyLogoUri: ImageURISource
    isGrayscale: boolean
    onPressed: () => void
}
