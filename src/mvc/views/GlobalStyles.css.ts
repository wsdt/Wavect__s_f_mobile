import { Dimensions, StyleSheet } from "react-native"

export const GREY = "#9b9b9b"
export const FULL_WIDTH = Dimensions.get("window").width // TODO: do not use! (remove!) -> or adapt on orientation change
export const FULL_HEIGHT = Dimensions.get("window").height // TODO: do not use! (remove!) -> or adapt on orientation change
export const BOTTOM_TABBAR_MARGIN = 150

const globalStyles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        width: "100%", // width: FULL_WIDTH,
        height: "100%",
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
        height: "100%",
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
