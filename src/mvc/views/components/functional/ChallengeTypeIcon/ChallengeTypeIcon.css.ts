import { StyleSheet } from "react-native"
import { GREY } from "../../../GlobalStyles.css"

const roundRadius = 500

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
        backgroundColor: GREY,
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
