import { StyleSheet } from 'react-native'
import globalStyles from '../../../GlobalStyles.css'

const radius = globalStyles.radius.borderRadius

const styles = StyleSheet.create({
    topLeftCompany: {
        alignSelf: 'flex-start',
        position: 'absolute',
        flex: 1,
        margin: 5,
        marginLeft: 15,
        marginTop: 15,
        borderRadius: radius,
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        borderRadius: radius,
        borderWidth: 4,
        borderColor: '#fff',
    },
})

export default styles
