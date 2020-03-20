/*
import {ImageURISource, Platform} from 'react-native'
// @ts-ignore
import Marker from 'react-native-image-marker'
import {logEvent, LogType} from '../LoggingController/LoggingController'


const TAG = 'WatermarkController'

// TODO: https://github.com/JimmyDaddy/react-native-image-marker

 @param userImage: base64 string (also other formats possible)
 * @param sponsorLogo: Logo to add on userImage.
export const addWatermarkToImage = async (userImage:ImageURISource, sponsorLogo:ImageURISource): Promise<null|ImageURISource> => {
    try {
        console.log("## 1")
        let path: string = await Marker.markImage({
            src: userImage.uri,
            markerSrc: sponsorLogo.uri,
            position: 'bottomLeft',
            scale: 1,
            quality: 100,
        })

        path = Platform.OS === 'android' ? 'file://'+path : path

        return {uri:path}
    } catch (e) {
        logEvent(LogType.ERROR, `${TAG}:addWatermarkToImage`, 'Could not add watermark to image.', e)
    }

    return null
}
*/
