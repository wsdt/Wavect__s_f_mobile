import * as React from "react"
import { ActivityIndicator } from "react-native"

/** Convenience component to make loadingIndicator more concise. */
export const LoadingIndicator = (): JSX.Element => {
    return <ActivityIndicator size="large" color="#000000" />
}
