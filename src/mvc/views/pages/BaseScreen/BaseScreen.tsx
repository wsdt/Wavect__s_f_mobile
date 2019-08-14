import * as React from 'react'
import { RefreshControl, View } from 'react-native'
import { Text } from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView, ScrollView } from 'react-navigation'
import * as _schema from '../../../../assets/translations/_schema.json'
import { logEvent, LogType } from '../../../controllers/LoggingController/LoggingController'
import { t } from '../../../controllers/MultiLingualityController/MultiLingualityController'
import { hasPerformedUpdateCheck, performAppUpdateProcedure } from '../../../controllers/UpdateController/UpdateController'
import { LoadingIndicator } from '../../components/functional/LoadingIndicator/LoadingIndicator'
import { ILoadingContext, LoadingHoc, LoadingStatus } from '../../components/system/HOCs/LoadingHoc'
import globalStyles from '../../GlobalStyles.css'
import styles from './BaseScreen.css'
import { IBaseScreenState } from './BaseScreen.state'

const TAG = 'BaseScreen'

export class BaseScreen extends React.PureComponent<any, IBaseScreenState> {
    public state: IBaseScreenState = {
        loadingStatus: LoadingStatus.LOADING,
        isRefreshing: false,
        refreshCallback: (cb: () => void) => {
            logEvent(LogType.WARN, `${TAG}:refreshCallback`, 'No refresh function provided')
            cb()
        },
    }

    public componentDidMount() {
        SplashScreen.hide()

        if (!hasPerformedUpdateCheck) {
            // only for UX improvement (do not show "preparing" when already done
            // Perform update tasks if new app update
            this.setState({ loadingStatus: LoadingStatus.PREPARING }) // show that we do sth. as maybe multiple tasks are executed
            performAppUpdateProcedure().then(() => {
                this.setState({ loadingStatus: LoadingStatus.LOADING }) // back to loading to allow sub-components to determine when they finished
            })
        }
    }

    public render() {
        const contextMethods: ILoadingContext = {
            setLoading: (loadingStatus: LoadingStatus) => this.setState({ loadingStatus }),
            setRefresh: (refreshCallback: (_: () => void) => void) => this.setState({ refreshCallback }),
        }

        return (
            <LoadingHoc.Provider value={contextMethods}>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh} />}
                    contentContainerStyle={styles.page}
                >
                    {this.getLoadingStatusComponent()}
                    <SafeAreaView>
                        <View style={[this.getDisplayProp(), globalStyles.scrollViewContainer]}>{this.props.children}</View>
                    </SafeAreaView>
                </ScrollView>
            </LoadingHoc.Provider>
        )
    }

    private onRefresh = () => {
        this.setState({ isRefreshing: true })
        this.state.refreshCallback(() => {
            this.setState({ isRefreshing: false })
            logEvent(LogType.LOG, `${TAG}:onRefresh`, 'User refreshed screen')
        })
    }

    private getCenteredText = (text: string, containerStyle?: any) => {
        return (
            <View style={[{ justifyContent: 'center', height: '100%' }, containerStyle]}>
                <Text>{text}</Text>
            </View>
        )
    }

    private getLoadingStatusComponent = () => {
        switch (this.state.loadingStatus) {
            case LoadingStatus.LOADING:
                return <LoadingIndicator />
            case LoadingStatus.PREPARING:
                return (
                    <>
                        <LoadingIndicator />
                        {this.getCenteredText(t(_schema.basescreen.loading.preparing), { marginTop: 30 })}
                    </>
                )
            case LoadingStatus.NOT_AVAILABLE:
                return this.getCenteredText(t(_schema.basescreen.loading.not_available))
            case LoadingStatus.ERROR:
                return this.getCenteredText(t(_schema.basescreen.loading.error))
            default:
                return null
        }
    }

    private getDisplayProp = (): null | {} => {
        return this.state.loadingStatus !== LoadingStatus.DONE ? { display: 'none' } : null
    }
}
