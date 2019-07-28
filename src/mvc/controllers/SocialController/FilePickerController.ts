import ImagePicker from "react-native-image-picker"

export const openFilePicker = (cb: (res: any) => void): void => {
    const options = {
        title: "Teile ein Foto um zu zeigen, dass du die Challenge erfolgreich abgeschlossen hast!",
        storageOptions: {
            skipBackup: true,
            path: "images",
        },
    }

    ImagePicker.showImagePicker(options, (res) => {
        if (res.didCancel) {
            cb(res)
        } else if (res.error) {
            return cb(res.error)
        }else {
            // return the URI of res-obj
            return cb(res)
        }
    })
}
