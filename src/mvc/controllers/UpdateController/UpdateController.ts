// @ts-ignore
import { version } from "../../../../package.json"
import { getLocalItem, setLocalItem } from "../LocalStorageController"
import { logEvent, LogType } from "../LoggingController/LoggingController"
import { ON_UPDATE_TASKS } from "./UpdateController.tasks"

const TAG = "UpdateController"
const PACKAGE_VERSION_KEY = "app_version"

/** What tasks should be executed when the app updates? Uses the package.json-version and not the native versionName/-code! */
export const performAppUpdateProcedure = async (): Promise<void> => {
    const appVersion: string | null = await getLocalItem(PACKAGE_VERSION_KEY)

    if (appVersion) {
        if (appVersion !== version) {
            // new update received
            logEvent(LogType.INFO, `${TAG}:main`, "User updated app.")

            for (const task of ON_UPDATE_TASKS) {
                // run update task list
                task.onAppUpdate(appVersion, version) // oldVersion, newVersion
            }

            setLocalItem(PACKAGE_VERSION_KEY, version) // set for future updates
        }
    } else {
        setLocalItem(PACKAGE_VERSION_KEY, version) // set for future updates
        logEvent(LogType.INFO, `${TAG}:main`, "User has ran the app for the first time.")
    }
}
