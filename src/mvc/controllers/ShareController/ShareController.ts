import { ImagePickerResponse } from 'react-native-image-picker'
import Share from 'react-native-share'
import { logEvent, LogType } from '../LoggingController/LoggingController'
import { t } from '../MultiLingualityController/MultiLingualityController'
import s from './ShareController.translations'

const TAG = 'ShareController'

/** @returns boolean: Was share successful? */
export const shareMedia = async (headline: string, sponsorName: string, res: ImagePickerResponse): Promise<boolean> => {
    // options for sharing an image
    const shareOptions = {
        title: t(s.dialog.title),
        message: t(s.dialog.msg, { headline, sponsorName }),
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
