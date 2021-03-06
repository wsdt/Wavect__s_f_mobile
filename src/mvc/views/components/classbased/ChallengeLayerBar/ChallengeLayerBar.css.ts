import { StyleSheet } from 'react-native'
import globalStyles from '../../../GlobalStyles.css'

const radius = globalStyles.radius.borderRadius

const styles = StyleSheet.create({
    mainComponent: {
        height: '100%',
        justifyContent: 'flex-end',
        zIndex: -1

    },

    btnStyleTransparent: {
        borderColor: 'transparent',
    },

    btnStyleWithBorder: {
        borderColor: '#000',
        height: 60,
    },

    btnTitleStandard: {
        color: '#000',
        fontSize: 20,
        padding: 10,
    },
    btnTitleWhiteColor: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
    },
    btnContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },

    headline: {
        margin: 3,
        fontSize: 30,
        letterSpacing: 3,
    },
    subline: {
        margin: 3,
        textAlign: 'left',
        justifyContent: 'flex-start',
        fontSize: 20,
        lineHeight: 35,
    },
    bottomActionContainer: {
        height: 220,
        backgroundColor: '#ccc',
        borderRadius: radius,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        justifyContent: 'flex-end',
        opacity: 0.8,
    },
})

export default styles
