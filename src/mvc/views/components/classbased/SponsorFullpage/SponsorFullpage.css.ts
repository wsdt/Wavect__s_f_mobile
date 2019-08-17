import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    topBar: {
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "gray",
        opacity: 0.8,
        height: 120,
    },
    imageStyle: {
        flex: 1,
        alignSelf: "center",
        width: "80%",
        height: "80%",
    },

    roundImageContainer: {
        top: 0,
        position: "absolute",
        height: 100,
        width: 100,
        borderRadius: 500,
        borderColor: "#ccc",
        backgroundColor: "white",
        borderWidth: 1,
        overflow: "hidden",
        margin: 10,
        opacity: 1,
    },
    shadow: {
        // TODO: Not working yet
        shadowColor: "#000",
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
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },

    boldHeadline: {
        fontSize: 30,
        fontWeight: "bold",
        color: "gray",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonContainer: {
        margin: 15,
        flexDirection: "row",
        width: "95%",
        justifyContent: "center",
    },
    icon: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
    },
    socialMedia: {
        position: "absolute",
        bottom: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    sponsorName: {
        position: "absolute",
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
        color: "#eee",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 50,
        marginRight: 20,
        marginTop: 20,
    },
    blockText: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
    },
})
