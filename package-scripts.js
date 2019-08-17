const parentScripts = require("../../_base/package-scripts")

parentScripts.scripts.default = "react-native start"
parentScripts.scripts.ios = "adb reverse tcp:9090 tcp:9090 && " + "yarn start genLangSchema && " + "react-native run-ios && " + "react-native log-ios"
parentScripts.scripts.android =
    "adb reverse tcp:9090 tcp:9090 && " +
    "rimraf ./android/app/build && " +
    "yarn start genLangSchema && " +
    "react-native run-android && " +
    "react-native log-android" // adb for reactotron (each time necessary), rimraf for android build dir bug (no permission)
parentScripts.scripts.genLangSchema = "python ./src/assets/translations/generate_schema.py"

module.exports = parentScripts
