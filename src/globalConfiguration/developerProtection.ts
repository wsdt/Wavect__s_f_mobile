import { BACKEND_URL, disableCache, useLocalBackend, useReactotron } from './globalConfig'

/** Watches whether all configs are as developers might want them to have it under certain conditions. */

const TAG: string = 'DeveloperProtection'

export const watchConfiguration = () => {
    // React-Native global constant = __DEV__
    if (__DEV__) {
        // ######### Place here developer-protection for development builds ###########
    } else {
        // ######### Place here developer-protection for release builds ###############

        // Following use the __DEV__ var even in release to determine if it should run, so this is just in case a developer removes it accidently
        if (useLocalBackend) throw new Error(`${TAG}: You must not compile a release app with a local backend!`)
        if (disableCache) throw new Error(`${TAG}: You must not disable cache for a release build!`)
        if (useReactotron) throw new Error(`${TAG}: You must not use Reactotron in a release build!`)
    }

    // ############# Place here general developer protection (for all builds) #########
    if (BACKEND_URL.slice(-1) === '/') throw new Error(`${TAG}: All api calls assume that the backend-url has NO backslash at the end!`)
}
