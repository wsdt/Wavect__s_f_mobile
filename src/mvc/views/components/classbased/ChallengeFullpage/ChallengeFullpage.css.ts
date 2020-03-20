import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    top: {
        justifyContent: 'flex-start',
        //position: 'absolute' // if the button is outside, it works!

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1
    },
})

export default styles
