const parentScripts = require("../../_base/package-scripts")

parentScripts.scripts.default = "react-native start" // expo start (if normal compiling) --> expo r -c = delete cache and then compile (slower)
parentScripts.scripts.ios = "adb reverse tcp:9090 tcp:9090 && react-native run-ios && react-native log-ios"
parentScripts.scripts.android = "adb reverse tcp:9090 tcp:9090 && rimraf ./android/app/build && react-native run-android && react-native log-android" // adb for reactotron (each time necessary), rimraf for android build dir bug (no permission)

module.exports = parentScripts
