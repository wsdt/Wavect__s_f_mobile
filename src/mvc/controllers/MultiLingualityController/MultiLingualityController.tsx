import i18n from 'i18n-js'
import memoize from 'lodash.memoize'
import * as Localization from 'expo-localization'
import TranslationBundle, { fallbackLanguagePack } from '../../../assets/translations/TranslationBundler'
import { ControlFunctionType } from '../../../globalConfiguration/developerProtection/CustomControlFunctions'
import { addCustomControlFunction } from '../../../globalConfiguration/developerProtection/developerProtection'
import { I18nManager } from "react-native";

/** Enhances performance seemingly (better than "translate" method from I18 or similar.
 * NOTE: This view is ONLY working in a view! If you need it somewhere else you have to provide it as parameter.
 * @param config: As far as I understand these are string-params for placeholders. */
export let t = memoize((key, config = {}) => i18n.t(key, config), (key, config = {}) => (config ? key + JSON.stringify(config) : key))

/** Called when new configuration has to be set (e.g. when user changes language or similar during app execution or when app ist started) */
export const setCurrentLanguageBundle = async () => {
    // todo ask kevin
    //const { languageTag, isRTL } = Localization.findBestAvailableLanguage(Object.keys(TranslationBundle)) || fallbackLanguagePack

    // clear translation cache (annotated with '?')
    if (t.cache.clear) t.cache.clear()

    // update layout direction todo ask kevin
    // I18nManager.forceRTL(isRTL)

    // set i18n-js config
     i18n.translations = TranslationBundle

    if (Localization.locale  == 'de-AT' || Localization.locale == 'de-DE'){
        i18n.locale = 'de'
    }else{
        i18n.locale = Localization.locale
    }
}

/** NOTE: Should be only used by developerProtection.ts (bc. of performance no usage in
 * production and senseless!). Compares all language packs and evaluates whether they contain
 * the same set of keys.
 *
 */
addCustomControlFunction(ControlFunctionType.DEBUG, (): Error | null => {
    const translationBundleArr = Object.values(TranslationBundle) // to array
    const keyArr = []
    for (const langPack of translationBundleArr) {
        keyArr.push(JSON.stringify(Object.keys(langPack).sort()))
    }

    // evaluate whether all keys equal
    if (!keyArr.every((val, _, arr) => val === arr[0])) {
        throw new Error(
            'MultiLingualityController:addCustomControlFunction: Not all language-packs have the same keys. This means that you did not provide translations for some languages.'
        )
    }

    return null
})

/**
 * NOTE: Do not export, save or cache any localized parameters. Always use them within your component as they can
 * change at any time which then needs a new render to take effect.
 */
