import { StyleSheet } from 'react-native'
import { FontType } from '../../functional/AppText/AppText.enum'

export const styles = StyleSheet.create({
    containerStyle: {
        textAlign: 'center',
    },
    cardStyle: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    topBar: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'gray',
        opacity: 0.8,
        height: 120,
    },
    imageStyle: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 500,
        overflow: 'hidden',
    },
    roundImageContainer: {
        top: 0,
        position: 'absolute',
        margin: 10,
    },
    shadow: {
        // TODO: Not working yet
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    boldHeadline: {
        fontSize: 35,
        color: 'gray',
        textAlign: 'center',
    },
    buttonContainer: {
        margin: 15,
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
    },
    iconProps: {
        width: 48,
        height: 48,
    },
    socialMedia: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    sponsorName: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#eee',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 25,
        marginRight: 12,
        marginTop: 20,
    },
    cardTitleStyle: {
        fontFamily: FontType.BOLD,
        fontSize: 25,
    },
    cardContainerStyle: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDivider: {
        width: '100%',
        margin: 5,
    },
    cardText: {
        fontSize: 18,
        textAlign: 'justify',
    },
})
