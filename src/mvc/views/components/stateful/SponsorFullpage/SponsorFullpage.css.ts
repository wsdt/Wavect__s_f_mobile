import { StyleSheet } from "react-native"
import { FULL_WIDTH } from "../../../GlobalStyles.css"

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: "100%",
        display: "flex",
    },
    fullSize: {
        width: "100%",
        height: "100%",
    },
    bottomBackButton: {
        width: "100%",
        height: 50,
        justifyContent: "flex-end",
    },
    heading: {
        marginTop: 20,
        fontSize: 100,
        fontWeight: "bold",
        textAlign: "center",
    },
    subline: {
        fontSize: 20,
        textAlign: "center",
    },

    hr_line: {
        borderBottomColor: "black",
        width: "100%",
        borderBottomWidth: 1,
        marginBottom: 20,
        marginTop: 20,
    },
    boldCenteredText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10,
    },
    link: {
        fontSize: 20,
        textAlign: "center",
        color: "blue",
    },
    imageContainer: {
        width: FULL_WIDTH,
        alignItems: "center",
    },
    imageStyle: {
        width: "50%",
        height: 150,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
    },
    socialMedia: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 20,
    },
})
