import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    topBar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "gray",
        height: 120,
    },
    imageStyle: {
        flex: 1,
        height: null,
        width: null,
    },
    roundImageContainer: {
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: "#ccc",
        backgroundColor: "white",
        borderWidth: 2,
        overflow: "hidden",
        marginTop: 60,
    },
    centered: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    socialMedia: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 20,
    },
    boldHeadline: {
        fontSize: 30,
        fontWeight: "bold",
        color: "gray",
        marginTop: 20,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
    },
})
