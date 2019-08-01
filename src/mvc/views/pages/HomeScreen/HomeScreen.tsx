import * as React from 'react'
import { View } from 'react-native'
import { BACKEND_MOBILE_API } from '../../../../globalConfiguration/globalConfig'
import { cachedFetch, putCache } from '../../../controllers/CacheController/CacheController'
import { CACHE_KEY_CHALLENGE } from '../../../controllers/CacheController/CacheController.constants'
import { Challenge } from '../../../models/Challenge'
import ChallengeFullpage from '../../components/stateful/ChallengeFullpage/ChallengeFullpage'
import { ILoadingContext, LoadingHoc, LoadingStatus } from '../../components/system/HOCs/LoadingHoc'
import { BaseScreen } from '../BaseScreen/BaseScreen'
import { IHomeScreenState } from './HomeScreen.state'

export class HomeScreen extends React.PureComponent<any, IHomeScreenState> {
    public state: IHomeScreenState = {
        challenge: undefined,
    }
    private loadingContext!: ILoadingContext

    public componentDidMount(): void {
        this.fetchChallenge(false)
        this.loadingContext.setRefresh((cb: () => void) => this.fetchChallenge(true, cb))
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

    private fetchChallenge = (reload: boolean, cb?: () => void) => {
        cachedFetch(this, CACHE_KEY_CHALLENGE, this.loadingContext, reload, () => {
            fetch(`${BACKEND_MOBILE_API}/challenge/current`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ challenge: data.res as Challenge })
                    if (this.state.challenge) {
                        putCache(CACHE_KEY_CHALLENGE, { challenge: data.res as Challenge })
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
        })
    }
}
