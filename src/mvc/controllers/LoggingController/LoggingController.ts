import AsyncStorage from '@react-native-community/async-storage'
import analytics from '@react-native-firebase/analytics'
import crashlytics from '@react-native-firebase/crashlytics'
import {USER_ID} from '../LocalStorageController/LocalStorageController.constants'

const analyticsInstance = analytics()
const crashlyticsInstance = crashlytics()

// Send data to Firebase # TODO: Data meant for us or really Google? If second disable!
analyticsInstance.setAnalyticsCollectionEnabled(true)

/** Used to send different events and logging to console. */
export enum LogType {
    ERROR = 'Error',
    WARN = 'Warn',
    LOG = 'Log',
    INFO = 'Info',
    EVENT = 'Event', // separate Event type to log event to analytics
}

/** Similar function available via LocalStorageController.ts, but to avoid require cycles a minimized version is added here. */
const getLocalUserId = async (): Promise<string> => {
    const userId:string|null = await AsyncStorage.getItem(USER_ID)
    return userId ? userId : 'UNKNOWN'
}

/**
 * Log sth. to firebase.
 * @param logType: Which event has been fired? How should we react?
 * @param event: Event names should contain 1 to 32 alphanumeric characters or underscores.
 * @param params: Up to 100 characters is the maximum character length supported for event parameters.
 * @param error: Used by crashlytics to submit the stacktrace (optional)
 */
export const logEvent = (logType: LogType, event: string, params: any, error?: Error): void => {
    if (!__DEV__) {
        params = JSON.stringify(params) // assuming that firebase does this already as they allow objects
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
            analyticsInstance.logEvent(event, params) // don't push log/debug
        }

        /* Crashlytics, send Reports, only get's submitted in error case as far as I understand */
        crashlyticsInstance.log(`${event}: ${params}`)
        if (error) {
            // do not if via logtype, as maybe also warnings provided
            crashlyticsInstance.recordError(error) // error-obj with stacktrace
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
    analyticsInstance.setCurrentScreen(screenName, screenClassOverride)
}

/**
 * Uses local saved userId from localStorage for the firebase user id.
 * Might be helpful for backend debugging as that id used as primary key.
 */
export const setCurrentUserId = async (): Promise<void> => {
    const userId = await getLocalUserId()
    analyticsInstance.setUserId(userId)
    crashlyticsInstance.setUserId(userId)
}

// many more functions available
