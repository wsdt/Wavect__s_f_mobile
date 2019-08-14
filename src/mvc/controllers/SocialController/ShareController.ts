import { ImagePickerResponse } from 'react-native-image-picker'
import Share from 'react-native-share'
import * as _schema from '../../../assets/translations/_schema.json'
import { logEvent, LogType } from '../LoggingController/LoggingController'
import { t } from '../MultiLingualityController/MultiLingualityController'

const TAG = 'ShareController'

/** @returns boolean: Was share successful? */
export const shareMedia = async (headline: string, sponsorName: string, res: ImagePickerResponse): Promise<boolean> => {
    // options for sharing an image
    const shareOptions = {
        title: t(_schema.controllers.share.dialog.title),
        message: t(_schema.controllers.share.dialog.msg, { headline, sponsorName }),
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
