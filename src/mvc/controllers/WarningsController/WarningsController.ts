import { Alert } from 'react-native'
import { t } from '../MultiLingualityController/MultiLingualityController'
import s from './WarningsController.translations'

export const functionalityNotAvailable = (msg: string) => {
    Alert.alert('Nicht verfügbar', msg, [{ text: 'Ok' }], { cancelable: true })
}

export const noInternetAvailable = () => {
    Alert.alert(t(s.dialog.no_internet.title), t(s.dialog.no_internet.msg), [{ text: t(s.dialog.no_internet.btn_ok) }], { cancelable: true })
}
