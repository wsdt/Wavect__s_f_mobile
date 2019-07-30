import { StyleSheet } from "react-native"

const roundRadius = 0
export const BG_COLOR = "#008B8B" // color used for tooltip and image-bg when user accomplished challenge

const styles = StyleSheet.create({
    image: {
        height: "75%",
        width: "75%",
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: roundRadius,
        width: 47,
        height: 47,
    },
    touchableContainer: {
        alignSelf: "flex-end",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -5,
        marginRight: -3,
        borderRadius: roundRadius,
        width: 60,
        height: 60,
        backgroundColor: "#fff",
    },
})

export default styles
