import { Alert } from 'react-native'
import * as _schema from '../../assets/translations/_schema.json'
import {t} from './MultiLingualityController/MultiLingualityController'

export const functionalityNotAvailable = (msg: string) => {
    Alert.alert('Nicht verfügbar', msg, [{ text: 'Ok' }], { cancelable: true })
}

export const noInternetAvailable = () => {
    Alert.alert(
        t(_schema.controllers.warning.dialog.no_internet.title),
        t(_schema.controllers.warning.dialog.no_internet.msg),
        [{ text: t(_schema.controllers.warning.dialog.no_internet.btn_ok) }],
        { cancelable: true })
}
