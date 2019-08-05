/**
 * @format
 */

import { AppRegistry } from "react-native"
import App from "./App"
import { name as appName } from "./app.json"
import { useReactotron } from "./src/globalConfiguration/globalConfig"
import { logEvent, LogType, setCurrentUserId } from "./src/mvc/controllers/LoggingController/LoggingController"
import { performAppUpdateProcedure } from "./src/mvc/controllers/UpdateController/UpdateController"

// Use reactotron if debug mode and activated
if (useReactotron) {
    import("./src/globalConfiguration/reactotron.config").then(() => logEvent(LogType.LOG, "index.js:reactotron", "Reactotron started!"))
}

// Firebase, set userid (analytics/crashlytics)
setCurrentUserId()

// Perform update tasks if new app update
performAppUpdateProcedure() // TODO: Should work, but might be executed AFTER other methods

// Start app
AppRegistry.registerComponent(appName, () => App)
