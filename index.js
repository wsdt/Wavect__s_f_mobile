import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { useReactotron } from './src/globalConfiguration/globalConfig'
import { logEvent, LogType, setCurrentUserId } from './src/mvc/controllers/LoggingController/LoggingController'

// Use reactotron if debug mode and activated
if (useReactotron) {
    import('./src/globalConfiguration/reactotron.config').then(() => logEvent(LogType.LOG, 'index.js:reactotron', 'Reactotron started!'))
}

// Firebase, set userid (analytics/crashlytics)
setCurrentUserId()

// Start app
AppRegistry.registerComponent(appName, () => App)
