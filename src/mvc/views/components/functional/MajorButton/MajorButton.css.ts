import { StyleSheet } from 'react-native'
import { secondaryBackgroundColor, secondaryColor } from '../../../../../globalConfiguration/globalConstants.css'
import { FontType } from '../AppText/AppText.enum'

const styles = StyleSheet.create({
    primaryBtnContainer: {
        backgroundColor: '#f3f3ee',
        borderRadius: 3,
        flex: 1.5,
        margin: 5,
    },
    highlightedBtnContainer: {
        backgroundColor: secondaryBackgroundColor,
        borderRadius: 3,

        flex: 1.5,
        margin: 5,
    },
    secondaryBtnContainer: {
        flex: 1,
        margin: 5,
    },
    btnTitleStandard: {
        color: '#000',
        fontSize: 20,
        fontFamily: FontType.BOLD,
        padding: 10,
    },
    btnStyleWithBorder: {
        borderColor: '#000',
        height: 60,
    },
    btnTitleHighlighted: {
        color: secondaryColor,
        fontFamily: FontType.BOLD,
        fontSize: 20,
        padding: 10,
    },
})

export default styles
