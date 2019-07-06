import * as React from "react"
import {Button} from "react-native-elements"
import {OAuthFacebook} from "../../../models/oauth/childs/oAuthFacebook"
import {TestFunctionalComponent} from "../../components/functional/TestFunctionalComponent/TestFunctionalComponent"
import {TestComponent} from "../../components/stateful/TestComponent/TestComponent"
import { BaseScreen } from "../BaseScreen/BaseScreen"
import {routesStr} from "../DashboardTabScreen/DashboardTabScreen.constants"

export class TestScreen extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <BaseScreen>
                <TestComponent/>
                <TestFunctionalComponent authCallback={OAuthFacebook.authenticate} socialType="facebook"/>
                <Button title="Login" type="outline" onPress={() => this.props.navigation.navigate(routesStr.NewsfeedStack.Home)} />
            </BaseScreen>
        )
    }
}

