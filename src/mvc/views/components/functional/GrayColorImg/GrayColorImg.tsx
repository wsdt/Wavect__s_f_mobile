import * as React from "react"
import { Grayscale } from "react-native-color-matrix-image-filters"
import { IGrayColorImgProps } from "./GrayColorImg.props"

export const GrayColorImg: React.FunctionComponent<IGrayColorImgProps> = props => {
    //  style={globalStyles.bottomBackButton}
    return props.isGrayscale ? <Grayscale>{props.children}</Grayscale> : <>{props.children}</>
}
