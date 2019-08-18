import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerStyle: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 50,
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10,
        marginBottom: 30,
        marginTop: 20,
        letterSpacing: 5,
    },
    headerText: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
    },
    blockText: {
        textAlign: 'center',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        marginBottom: 25
    },
    backButton: {
        justifyContent: 'flex-end'
    }
})

export default styles
