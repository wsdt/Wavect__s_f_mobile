import * as React from "react"
import { setCurrentScreen } from "../../../controllers/LoggingController/LoggingController"
import { BaseScreen } from "../BaseScreen/BaseScreen"

/**
 * really used (sense) ?
 */

export class SettingsScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <SettingsScreen />
            </BaseScreen>
        )
    }
}

setCurrentScreen("SettingsScreen", SettingsScreen.toString())
