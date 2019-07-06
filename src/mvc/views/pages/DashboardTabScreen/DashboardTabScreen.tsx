import * as React from "react"
import {DashboardTabScreenContainer} from "./DashboardTabScreen.conf"

export class DashboardTabScreen extends React.Component<any, any> {
    public render(): JSX.Element {
        // Do not nest app Container into BaseScreen
        return (
            <DashboardTabScreenContainer/>
        )
    }
}
