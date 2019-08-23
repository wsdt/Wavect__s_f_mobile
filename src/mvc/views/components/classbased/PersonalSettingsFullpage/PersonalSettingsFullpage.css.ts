import { StyleSheet } from "react-native"
import {FontType} from "../../functional/AppText/AppText.enum";

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollStyle:{
        padding: 10,
    },
    icon: {
        marginLeft: 0,
        marginRight: 10,
        padding: 0,
    },
    cardStyle: {
        width: '100%',
        marginTop: 15,
        marginBottom: 15
    },
    introText: {
      lineHeight: 30,
      textAlign: 'left',
    },
    buttonStyle: {
        width: '100%',
        marginTop: 15
    },
    buttonTextStyle: {
      fontSize: 25,
      fontFamily: FontType.STANDARD,
      marginLeft: 15
    }
})

export default styles
