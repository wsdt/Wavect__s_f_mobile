import React from 'react'
import {
    Image,
    TouchableOpacity,
    View
} from 'react-native'
import styles from './CompanyLogo.css'
import { ICompanyLogoProps } from './CompanyLogo.props'

export const CompanyLogo: React.FunctionComponent<ICompanyLogoProps> = props => {
    return (
        <TouchableOpacity
            style={styles.topLeftCompany}
            onPress={props.onPressed}
            accessible={true}
            accessibilityLabel='Sponsor'
            accessibilityRole='imagebutton'
            accessibilityHint='Weitere Informationen zum Sponsor'
        >
            <View>
                <Image
                    resizeMode={'contain'}
                    source={props.companyLogoUri}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}
