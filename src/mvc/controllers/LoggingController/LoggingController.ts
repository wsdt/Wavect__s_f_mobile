import {analytics, RNFirebase} from 'react-native-firebase'
import {getLocalUserId} from "../LocalStorageController"

const analyticsInstance: RNFirebase.Analytics = analytics()

// Send data to Firebase # TODO: Data meant for us or really Google? If second disable!
analyticsInstance.setAnalyticsCollectionEnabled(true)

/** Used to send different events and logging to console. */
export enum LogType {
    ERROR = "Error", WARN = "Warn", LOG = "Log", INFO = "Info"
}

/**
 * Log sth. to firebase.
 * @param logType: Which event has been fired? How should we react?
 * @param event: Event names should contain 1 to 32 alphanumeric characters or underscores.
 * @param params: Up to 100 characters is the maximum character length supported for event parameters.
 */
export const logEvent = (logType: LogType, event: string, params: any): void => {
    if (__DEV__) {
        params = JSON.stringify(params) // assuming that firebase does this already as they allow objects
        switch (logType) {
            case LogType.ERROR: console.error(`${event}: ${params}`);break
            case LogType.WARN: console.warn(`${event}: ${params}`);break
            case LogType.LOG: console.log(`${event}: ${params}`);break
            case LogType.INFO: console.info(`${event}: ${params}`);break
            default: console.error(`LogType not implemented: '${logType}', actual event: ${event}:${params}`)
        }
    } else {
        if (logType === LogType.ERROR || logType === LogType.WARN) {
            analyticsInstance.logEvent(`${logType}:${event}`, params) // only release mode and on warnings/errors
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
    analyticsInstance.setUserId(await getLocalUserId())
}

// many more functions available



