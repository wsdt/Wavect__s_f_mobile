import React from 'react'
import * as RNLocalize from 'react-native-localize'
import {logEvent, LogType} from '../../../controllers/LoggingController/LoggingController'
import {setCurrentLanguageBundle,} from '../../../controllers/MultiLingualityController/MultiLingualityController'
import {ITranslateableScreenState} from './TranslateableScreen.state'

const TAG: string = 'TranslateableComponent'

/** Can be extended from any class, BUT prefer using screen views to avoid code-redundancy or performance issues as
 * the whole screen might need to be re-rendered in any case if the user changes his localization preferences. */
export class TranslateableScreen extends React.Component<any, ITranslateableScreenState> {

    public state: ITranslateableScreenState = {
        isTranslationBundleLoaded: false,
    }


    constructor(props: any) {
        super(props)

        setCurrentLanguageBundle() // set initial config
            .then(() => {
                this.setState({isTranslationBundleLoaded: true})
                RNLocalize.addEventListener('change', this.handleLocalizationChange)
            })
            .catch((error: Error) => {
                logEvent(LogType.ERROR, `${TAG}:constructor:setCurrentLanguageBundle`, 'Could not set current language bundle.', error)
            })
    }

    public componentWillUnmount() {
        RNLocalize.removeEventListener('change', this.handleLocalizationChange)
    }

    public handleLocalizationChange = () => {
        setCurrentLanguageBundle()
            .then(() => this.forceUpdate())
            .catch((error: Error) => {
                logEvent(LogType.ERROR, `${TAG}:constructor:setCurrentLanguageBundle`, 'Could not set current language bundle.', error)
            })
    }

    public shouldComponentUpdate(_: Readonly<any>, nextState: Readonly<ITranslateableScreenState>): boolean {
        return nextState.isTranslationBundleLoaded
    }

    public render() {
        return <>{this.props.children}</>
    }
}
