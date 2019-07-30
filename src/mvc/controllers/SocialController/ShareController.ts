import { ImagePickerResponse } from "react-native-image-picker"
import Share from "react-native-share"

export const shareImage = async (headline: string, sponsorName: string, res: ImagePickerResponse, cb?: (wasShareSuccessful: boolean) => void) => {

    const shareOptionsImage = {
        title: "Share via",
        message: `Hey Leute, ich habe die Challenge "${headline}" (Gesponsort von "${sponsorName}") erfolgreich gelöst, hier der Beweis:`,
        url: `data:${res.type};base64, ${res.data}`,
    }

    // todo still a bug.. but guess im at 99%
    // todo finish tomorrow, kisses
    const shareOptionsVideo = {
        title: "Check out my video",
        message: "Check out my video!",
        url: `file://${res.path}`,
        type: "video/mp4",
        subject: "Check out my video!",
    }

    const shareOptions = res.type === "image/jpeg" ? shareOptionsImage : shareOptionsVideo

    console.log(shareOptions)

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
