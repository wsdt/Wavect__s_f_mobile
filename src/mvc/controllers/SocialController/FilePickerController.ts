import ImagePicker from "react-native-image-picker"

export const openFilePicker = (cb: (res: any) => void): void => {
    const options = {
        title: "Beweis es!",
        skipBackup: true,
    }

    ImagePicker.showImagePicker(options, res => {
        cb(res)
    })
}
