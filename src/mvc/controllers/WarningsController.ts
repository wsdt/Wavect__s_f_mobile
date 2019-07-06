import { ToastAndroid } from "react-native"

export const notImplementedSync = (): string => {
    console.warn("notImplemented: Not implemented.")
    ToastAndroid.show("Coming soon..", ToastAndroid.SHORT)
    return "Not Implemented"
}

export const notImplementedAsync = (): Promise<string> => {
    return Promise.resolve(notImplementedSync())
}
