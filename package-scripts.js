const parentScripts = require("../../_base/package-scripts")

parentScripts.scripts.default = "react-native start" // expo start (if normal compiling) --> expo r -c = delete cache and then compile (slower)
parentScripts.scripts.ios = "react-native run-ios && react-native log-ios"
parentScripts.scripts.android = "react-native run-android && react-native log-android"

module.exports = parentScripts
