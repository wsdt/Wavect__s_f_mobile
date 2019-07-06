import { Alert } from "react-native"

export const functionalityNotAvailable = (msg: string) => {
    Alert.alert("Nicht verfügbar", msg, [{ text: "Ok" }], { cancelable: true })
}

export const noInternetAvailable = () => {
    Alert.alert("Keine Verbindung", "Server nicht erreichbar. Hast du eine Internetverbindung?", [{ text: "Ok" }], { cancelable: true })
}
