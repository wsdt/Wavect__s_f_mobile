import { ImagePickerResponse } from "react-native-image-picker"
import Share from "react-native-share"

export const shareImage = async (headline: string, sponsorName: string, res: ImagePickerResponse, cb?: (wasShareSuccessful: boolean) => void) => {
    // options for sharing an image
    const shareOptions = {
        title: "Share via",
        message: `Hey Leute, ich habe die Challenge "${headline}" (Gesponsort von "${sponsorName}") erfolgreich gelöst, hier der Beweis:`,
        url: `data:${res.type};base64, ${res.data}`,
    }

    console.log("Options", cb)

    Share.open(shareOptions)
        .then((_: any) => {
            console.log("fuck you")
            if (cb) {
                console.log("fuck 1")
                cb(true)
            }
        })
        .catch((err: any) => {
            console.log("fuck me")
            if (cb) {
                console.log("fuck 2")
                cb(false)
            }
            console.warn("ShareController:shareMedia: Action aborted by user -> " + JSON.stringify(err))
        })
}
