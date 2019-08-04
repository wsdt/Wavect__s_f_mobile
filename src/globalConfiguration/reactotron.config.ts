
import Reactotron from "reactotron-react-native"

// Add here further reactotron settings
Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react-native plugins
    .connect()