import {ImagePickerResponse} from "react-native-image-picker"
import Share from "react-native-share"
import {logEvent, LogType} from "../LoggingController/LoggingController"

const TAG = "ShareController"

/** @returns boolean: Was share successful? */
export const shareMedia = async (headline: string, sponsorName: string, res: ImagePickerResponse): Promise<boolean> => {
    // options for sharing an image
    const shareOptions = {
        title: "Share via",
        message: `Hey Leute, ich habe die Challenge "${headline}" (Gesponsort von "${sponsorName}") erfolgreich gelöst, hier der Beweis:`,
        url: `data:${res.type};base64, ${res.data}`,
    }

    try {
        await Share.open(shareOptions)
        return true
    } catch (err) {
        logEvent(LogType.WARN, `${TAG}:shareMedia`, `Action aborted by user -> ${JSON.stringify(err)}`)
        return false
    }
}
