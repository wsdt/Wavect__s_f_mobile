import { ImagePickerResponse } from "react-native-image-picker"
import Share from "react-native-share"

export const shareImage = (headline: string, sponsorName: string, res: ImagePickerResponse, cb?: (wasShareSuccessful: boolean) => void) => {
    const shareOptions = {
        title: "Share via",
        message: `Hey Leute, ich habe die Challenge "${headline}" (Gesponsort von "${sponsorName}") erfolgreich gelöst, hier der Beweis:`,
        url: `data:${res.type};base64, ${res.data}`,
    }

    Share.open(shareOptions)
        .then((_: any) => {
            if (cb) {
                cb(true)
            }
        })
        .catch((err: any) => {
            if (cb) {
                cb(false)
            }
            console.warn("ShareController:shareMedia: Action aborted by user -> " + JSON.stringify(err))
        })
}
