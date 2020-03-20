import * as React from 'react'
//import * as RNLocalize from 'react-native-localize'
import { createAppContainer } from 'react-navigation'
import { IAppState } from './App.state'
import { watchConfiguration } from './src/globalConfiguration/developerProtection/developerProtection'
import { logEvent, LogType } from './src/mvc/controllers/LoggingController/LoggingController'
import { setCurrentLanguageBundle } from './src/mvc/controllers/MultiLingualityController/MultiLingualityController'
import Router from './src/mvc/views/components/system/TabRouter/TabRouter'
import {fetchFonts} from "./src/mvc/controllers/FontController/FontController";
import AppLoading from "expo/build/launch/AppLoading";


const TAG = 'App'

// Start developer protection
watchConfiguration()

/**
 * Just export the router component in an app container, to
 * make routes available to all pages.
 */
const AppContainer = createAppContainer(Router)

/** Make app multilingual */
class App extends React.Component<any, IAppState> {
    public state: IAppState = {
        isTranslationBundleLoaded: false,
        isFontLoaded: false
    }

    constructor(props: any) {
        super(props)


        setCurrentLanguageBundle() // set initial config
            .then(() => {
                this.setState({ isTranslationBundleLoaded: true })
                //RNLocalize.addEventListener('change', this.handleLocalizationChange)
            })
            .catch((error: Error) => {
                logEvent(LogType.ERROR, `${TAG}:constructor:setCurrentLanguageBundle`, 'Could not set current language bundle.', error)
            })
    }

    public componentWillUnmount() {
        //RNLocalize.removeEventListener('change', this.handleLocalizationChange)
    }

    public handleLocalizationChange = () => {
        setCurrentLanguageBundle()
            .then(() => this.forceUpdate())
            .catch((error: Error) => {
                logEvent(LogType.ERROR, `${TAG}:constructor:setCurrentLanguageBundle`, 'Could not set current language bundle.', error)
            })
    }


    public shouldComponentUpdate(_: Readonly<any>, nextState: Readonly<IAppState>): boolean {
        return nextState.isTranslationBundleLoaded
    }

    public render() {
        if (this.state.isFontLoaded){
            return (
                <AppContainer />
            )
        }else{
            return (
                <AppLoading
                    startAsync={fetchFonts} // this loads the fonts
                    onFinish={() => this.setState({isFontLoaded: true})}
                    onError={e => console.error(e)}
                />
            );

        }
    }
}

export default App
