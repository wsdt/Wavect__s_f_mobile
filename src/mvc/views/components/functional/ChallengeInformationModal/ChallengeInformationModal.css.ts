import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    innerContent: {
        backgroundColor: 'white',
        opacity: 0.9,
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    centeredInnerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40,
    },
    centeredText: {
        textAlign: 'center',
        fontSize: 16,
        margin: 10,
        lineHeight: 23,
    },

    ending: {
        textAlign: 'center',
        fontSize: 23,
        margin: 15,
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    image: {
        width: 30,
        height: 30,
        margin: 10,
    },
    closeIcon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 0,
        marginTop: 5,
    },
})

export default styles
