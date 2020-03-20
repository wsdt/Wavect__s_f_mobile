import { StyleSheet } from 'react-native'

const roundRadius = 5
export const BG_COLOR = '#008B8B' // color used for tooltip and image-bg when user accomplished challenge

const styles = StyleSheet.create({
    image: {
        height: '95%',
        width: '95%',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: roundRadius,
        width: 50,
        height: 50,
        borderWidth: 4,
        borderColor: '#fff',
    },
    touchableContainer: {
        alignSelf: 'flex-end',
        position: 'absolute',
        width: 60,
        marginTop: 15,
    },
});

export default styles
