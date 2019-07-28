import React from "react"
import { TouchableOpacity} from "react-native"
import FastImage from "react-native-fast-image"
import {GrayColorImg} from "../GrayColorImg/GrayColorImg"
import styles from "./CompanyLogo.css"
import {ICompanyLogoProps} from "./CompanyLogo.props"

export const CompanyLogo: React.FunctionComponent<ICompanyLogoProps> = props => {
    // props.companyLogoUri.cache = "only-if-cached" // works only on ios

    return (
        <TouchableOpacity style={styles.topLeftCompany} onPress={props.onPressed}>
            <GrayColorImg isGrayscale={props.isGrayscale}>
                <FastImage
                    resizeMode={"contain"}
                    source={{
                        priority: FastImage.priority.normal,
                        uri: props.companyLogoUri.uri,
                }} style={styles.image}/>
            </GrayColorImg>
        </TouchableOpacity>
    )
}


