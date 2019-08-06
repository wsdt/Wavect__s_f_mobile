import AppVersion from 'react-native-version-number'
import { getLocalItem, setLocalItem } from '../LocalStorageController/LocalStorageController'
import { logEvent, LogType } from '../LoggingController/LoggingController'
import { ON_UPDATE_TASKS } from './UpdateController.tasks'

const TAG = 'UpdateController'
const PACKAGE_VERSION_KEY = 'app_version'

const buildVersion: string = AppVersion.buildVersion.toString() // necessary as it is a number regardless of typing

/** What tasks should be executed when the app updates? Uses the package.json-version and not the native versionName/-code! */
export const performAppUpdateProcedure = async (): Promise<void> => {
    const appVersion: string | null = await getLocalItem(PACKAGE_VERSION_KEY)

    if (appVersion) {
        if (appVersion !== buildVersion) {
            // new update received
            logEvent(LogType.INFO, `${TAG}:main`, 'User updated app.')

            for (const task of ON_UPDATE_TASKS) {
                // run update task list
                task.onAppUpdate(appVersion, buildVersion) // oldVersion, newVersion
            }

            setLocalItem(PACKAGE_VERSION_KEY, buildVersion) // set for future updates
        } // otherwise regular run
    } else {
        setLocalItem(PACKAGE_VERSION_KEY, buildVersion) // set for future updates
        logEvent(LogType.INFO, `${TAG}:main`, 'User has ran the app for the first time.')
    }
}
