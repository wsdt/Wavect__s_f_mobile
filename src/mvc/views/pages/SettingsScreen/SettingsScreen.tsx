import * as React from "react"
import { setCurrentScreen } from "../../../controllers/LoggingController/LoggingController"
import GeneralSettingsFullpage from "../../components/classbased/GeneralSettingsFullpage/GeneralSettingsFullpage"
import { BaseScreen } from "../BaseScreen/BaseScreen"

export class SettingsScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <GeneralSettingsFullpage />
            </BaseScreen>
        )
    }
}

setCurrentScreen("SettingsScreen", SettingsScreen.toString())
