import { Dimensions, StyleSheet } from "react-native"

export const GREY = "#9b9b9b"
export const FULL_WIDTH = Dimensions.get("window").width
export const FULL_HEIGHT = Dimensions.get("window").height

const globalStyles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        width: FULL_WIDTH,
    },
    absoluteCenter: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    pageContainer: {
        flex: 1,
        height: FULL_HEIGHT-150,
        margin: 5,
        justifyContent: "flex-start",
    },
    tooltipText: {
        color: "#fff",
    },
    fullSize: {
        height: "100%",
        width: "100%",
    },
    radius: {
        borderRadius: 15,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
})

export default globalStyles
