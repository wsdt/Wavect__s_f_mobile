import { StyleSheet } from "react-native"
import {FULL_WIDTH} from "../../../GlobalStyles.css";

const styles = StyleSheet.create({
    row: {
        margin: 5,
        marginTop: 15,
    },
    fullpageWidth: {
        width: "95%",
    },
    fullAbsoluteWidth: {
        width: FULL_WIDTH-15
    }
})

export default styles
