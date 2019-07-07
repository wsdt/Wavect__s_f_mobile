import React from "react"
import { Image, TouchableOpacity } from "react-native"
import { GrayColorImg } from "../GrayColorImg/GrayColorImg"
import styles from "./CompanyLogo.css"
import { ICompanyLogoProps } from "./CompanyLogo.props"

export const CompanyLogo: React.FunctionComponent<ICompanyLogoProps> = props => {
    return (
        <TouchableOpacity style={styles.topLeftCompany} onPress={props.onPressed}>
            <GrayColorImg isGrayscale={props.isGrayscale}>
                <Image source={props.companyLogoUri} style={styles.image} />
            </GrayColorImg>
        </TouchableOpacity>
    )
}
