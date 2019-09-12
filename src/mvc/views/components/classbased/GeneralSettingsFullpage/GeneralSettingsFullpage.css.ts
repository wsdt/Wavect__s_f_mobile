import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 200,
        height: 200,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationView: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    navItem: {
        padding: 10,
    },
    navText: {
        margin: 17,
        fontSize: 25,
    },
    icon: {
        height: 32,
        width: 32,
    },
    row: {
        marginLeft: 10,
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
    },
})

export default styles
