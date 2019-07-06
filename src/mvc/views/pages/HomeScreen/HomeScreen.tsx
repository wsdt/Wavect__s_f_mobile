import * as React from "react"
import {View} from "react-native"
import {BACKEND_MOBILE_API} from "../../../../globalConfiguration/globalConfig"
import {Challenge} from "../../../models/Challenge"
import ChallengeFullpage from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import {LoadingContext, LoadingStatus} from "../../components/system/HOCs/LoadingHoc"
import {BaseScreen} from "../BaseScreen/BaseScreen"
import {IHomeScreenState} from "./HomeScreen.state"

export class HomeScreen extends React.Component<any, IHomeScreenState> {
    public state: IHomeScreenState = {
        challenge: undefined,
    }
    private setLoading!: (_: LoadingStatus) => void

    public componentDidMount(): void {
        this.fetchChallenge()
    }

    public render() {
        return (
            <BaseScreen>
                <LoadingContext.Consumer>
                    {setLoading => {
                        this.setLoading = setLoading
                        return <View>{this.getChallengeComponent()}</View>
                    }}
                </LoadingContext.Consumer>
            </BaseScreen>
        )
    }

    private getChallengeComponent = () => {
        if (this.state.challenge) {
            return <ChallengeFullpage challenge={this.state.challenge}/>
        }
        return null
    }

    private fetchChallenge = () => {
        fetch(`${BACKEND_MOBILE_API}/challenge/current`)
            .then(res => res.json())
            .then(data => {
                this.setState({challenge: data.res as Challenge})
                this.setLoading(LoadingStatus.DONE)
            })
            .catch(e => {
                console.error(e)
                this.setLoading(LoadingStatus.ERROR)
            })
    }
}