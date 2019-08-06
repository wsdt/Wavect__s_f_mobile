// Should work as listed in devDependencies

// tslint:disable-next-line:no-implicit-dependencies
import Reactotron from 'reactotron-react-native'

if (Reactotron.clear) Reactotron.clear() // delete logs on new startup

// Add here further reactotron settings
Reactotron.configure() // controls connection & communication settings
    .useReactNative({}) // add all built-in react-native plugins
    .connect()
