import React from 'react'
import {
    Image,
    View,
    TouchableOpacity
} from 'react-native'
import styles from './CompanyLogo.css'
import { ICompanyLogoProps } from './CompanyLogo.props'

export const CompanyLogo: React.FunctionComponent<ICompanyLogoProps> = props => {
    return (
        <TouchableOpacity
            style={styles.topLeftCompany}
            onPress={props.onPressed}
            accessible={true}
            accessibilityLabel="Sponsor"
            accessibilityRole="imagebutton"
            accessibilityHint="Weitere Informationen zum Sponsor"
        >
            <View>
                <Image
                    resizeMode={'contain'}
                    source={{
                        // TODO markus wimmer image seems to be corrupt too ?! or not suitable
                        uri: "https://images.pexels.com/photos/267355/pexels-photo-267355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}
