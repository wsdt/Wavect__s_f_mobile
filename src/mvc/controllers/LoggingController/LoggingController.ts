import * as SecureStore from 'expo-secure-store';
import { USER_ID } from '../LocalStorageController/LocalStorageController.constants'


/*
 *
 * TODO implement logging functionality
 *
 */
export enum LogType {
    ERROR = 'Error',
    WARN = 'Warn',
    LOG = 'Log',
    INFO = 'Info',
    EVENT = 'Event', // separate Event type to log event to analytics
}

/** Similar function available via LocalStorageController.ts, but to avoid require cycles a minimized version is added here. */
const getLocalUserId = async (): Promise<string> => {
    const userId: string | null = await SecureStore.getItemAsync(USER_ID)
    return userId ? userId : 'UNKNOWN'
}

export const logEvent = (logType: LogType, event: string, params: any, error?: Error): void => {
    if (!__DEV__) {
        params = JSON.stringify(params)
        switch (logType) {
            case LogType.ERROR:
                console.error(`${event}: ${params}`)
                break
            case LogType.WARN:
                console.warn(`${event}: ${params}`)
                break
            case LogType.LOG:
                console.log(`${event}: ${params}`)
                break
            case LogType.INFO || LogType.EVENT:
                console.info(`${event}: ${params}`)
                break
            default:
                console.error(`LogType not implemented: '${logType}', actual event: ${event}:${params}`)
        }
    } else {
        // Release mode

        /* Log analytics events to analyze how our app is used */
        if (logType === LogType.EVENT) {
            // NOTE: Events might need to be created manually online!

        }

        /* Crashlytics, send Reports, only get's submitted in error case as far as I understand */

        if (error) {
            // do not if via logtype, as maybe also warnings provided

        }
    }
}

/**
 * @param screenName: Set current screen name.
 * @param screenClassOverride: Whilst screenClassOverride is optional, it is recommended
 * it is always sent as your current class name, for example on Android it will always show
 * as 'MainActivity' if not specified.
 */
export const setCurrentScreen = (screenName: string, screenClassOverride: string): void => {

}

/**
 * Uses local saved userId from localStorage for the firebase user id.
 * Might be helpful for backend debugging as that id used as primary key.
 */
export const setCurrentUserId = async (): Promise<void> => {
    const userId = await getLocalUserId()
}

// many more functions available
