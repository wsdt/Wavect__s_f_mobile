import ImagePicker, { ImagePickerOptions, ImagePickerResponse } from "react-native-image-picker"

export const openFilePicker = (cb: (res: ImagePickerResponse) => void): void => {
    const options: ImagePickerOptions = {
        title: "Beweis es!",
        mediaType: "photo", // works only on ios, on android only photos are used, TODO: add video support (but base64 might not work here and pay attention to which platform supports which attributes -> path, uri, ...)
        customButtons: [{ name: "video", title: "Make a video..." }],
        storageOptions: {
            skipBackup: true,
        },
        // noData: true, // TODO: uncomment when pic/vid shared via path as this greatly enhances performance!
    }

    const videoOptions: any = {
        storageOptions: {
            skipBackup: true,
        },
        mediaType: "video",
    }

    ImagePicker.showImagePicker(options, (res: ImagePickerResponse) => {
        if (res.customButton === "video") {
            ImagePicker.launchCamera(videoOptions, res => {
                console.log("user wants to make a video")
                cb(res)
            })
        } else {
            cb(res)
        }
    })
}
