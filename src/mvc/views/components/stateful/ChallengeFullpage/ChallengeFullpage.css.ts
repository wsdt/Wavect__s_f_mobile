import { StyleSheet } from "react-native"
import { FULL_HEIGHT, FULL_WIDTH } from "../../../GlobalStyles.css"

const styles = StyleSheet.create({
    top: {
        justifyContent: "flex-start",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        position: "absolute",
        width: FULL_WIDTH,
        height: FULL_HEIGHT,
    },
})

export default styles
