import ImagePicker, { ImagePickerOptions, ImagePickerResponse } from 'react-native-image-picker'
import { t } from '../MultiLingualityController/MultiLingualityController'
import s from './FilePickerController.translations'


export const openFilePicker = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const options: ImagePickerOptions = {
            title: t(s.dialog.title),
            mediaType: 'photo', // works only on ios, on android only photos are used, TODO: add video support (but base64 might not work here and pay attention to which platform supports which attributes -> path, uri, ...)
            storageOptions: {
                skipBackup: true,
                path: 'photo',
            },
            // noData: true, // TODO: uncomment when pic/vid shared via path as this greatly enhances performance!
        }

        try {
            ImagePicker.showImagePicker(options, (res: ImagePickerResponse) => {
                resolve(res)
            })
        } catch (e) {
            reject(e)
        }
    })
}
