import * as Font from 'expo-font'

export const fetchFonts = async() => {
    await Font.loadAsync({
        // add fonts here!
        'FuturaStd-Medium': require('../../../assets/fonts/FuturaStd-Medium.otf'),
        'FuturaStd-Bold': require('../../../assets/fonts/FuturaStd-Bold.otf'),
        'FuturaStd-Heavy': require('../../../assets/fonts/FuturaStd-Heavy.otf'),
        'FuturaStd-CondensedLight': require('../../../assets/fonts/FuturaStd-CondensedLight.otf')
    })
}
