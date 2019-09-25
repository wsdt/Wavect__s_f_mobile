import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    versionFont: {
        fontSize: 12,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        paddingEnd: 5,
        paddingBottom: 5,
    },
    itemFont: {
        fontSize: 22,
    },
    mainView: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 150,
        height: 150,
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
