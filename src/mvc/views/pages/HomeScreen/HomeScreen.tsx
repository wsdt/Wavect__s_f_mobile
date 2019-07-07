import * as React from "react"
import { View } from "react-native"
import { BACKEND_MOBILE_API } from "../../../../globalConfiguration/globalConfig"
import { Challenge } from "../../../models/Challenge"
import ChallengeFullpage from "../../components/stateful/ChallengeFullpage/ChallengeFullpage"
import { ILoadingContext, LoadingHoc, LoadingStatus } from "../../components/system/HOCs/LoadingHoc"
import { BaseScreen } from "../BaseScreen/BaseScreen"
import { IHomeScreenState } from "./HomeScreen.state"

export class HomeScreen extends React.Component<any, IHomeScreenState> {
    public state: IHomeScreenState = {
        challenge: undefined,
    }
    private loadingContext!: ILoadingContext

    public componentDidMount(): void {
        this.fetchChallenge()
        this.loadingContext.setRefresh(this.fetchChallenge)
    }

    public render() {
        return (
            <BaseScreen>
                <LoadingHoc.Consumer>
                    {contextMethods => {
                        this.loadingContext = contextMethods
                        return <View>{this.getChallengeComponent()}</View>
                    }}
                </LoadingHoc.Consumer>
            </BaseScreen>
        )
    }

    private getChallengeComponent = () => {
        if (this.state.challenge) {
            return <ChallengeFullpage challenge={this.state.challenge} />
        }
        return null
    }

    private fetchChallenge = (cb?: () => void) => {
        fetch(`${BACKEND_MOBILE_API}/challenge/current`)
            .then(res => res.json())
            .then(data => {
                this.setState({ challenge: data.res as Challenge })
                if (this.state.challenge) {
                    this.loadingContext.setLoading(LoadingStatus.DONE)
                } else {
                    this.loadingContext.setLoading(LoadingStatus.NOT_AVAILABLE)
                }
                if (cb) {
                    cb()
                }
            })
            .catch(e => {
                console.error(e)
                this.loadingContext.setLoading(LoadingStatus.ERROR)
                if (cb) {
                    cb()
                }
            })
    }
}
