import * as React from "react"
import { ActivityIndicator } from "react-native"

import globalStyles from "../../../GlobalStyles.css"

/** Convenience component to make loadingIndicator more concise. */
export const LoadingIndicator = () => {
    return <ActivityIndicator size="large" color="#000000" style={globalStyles.absoluteCenter} />
}
