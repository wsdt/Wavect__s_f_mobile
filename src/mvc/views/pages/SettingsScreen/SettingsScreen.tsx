import * as React from 'react'
import { setCurrentScreen } from '../../../controllers/LoggingController/LoggingController'
import { SettingsFullpage } from '../../components/classbased/SettingsFullpage/SettingsFullpage'
import { BaseScreen } from '../BaseScreen/BaseScreen'

export class SettingsScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <SettingsFullpage />
            </BaseScreen>
        )
    }
}

setCurrentScreen('SettingsScreen', SettingsScreen.toString())
