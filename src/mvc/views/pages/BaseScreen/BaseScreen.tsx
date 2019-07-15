import * as React from "react"
import { RefreshControl, View } from "react-native"
import { Text } from "react-native-elements"
import SplashScreen from "react-native-splash-screen"
import { ScrollView, SafeAreaView } from "react-navigation"
import { LoadingIndicator } from "../../components/functional/LoadingIndicator/LoadingIndicator"
import { ILoadingContext, LoadingHoc, LoadingStatus } from "../../components/system/HOCs/LoadingHoc"
import globalStyles from "../../GlobalStyles.css"
import styles from "./BaseScreen.css"
import { IBaseScreenState } from "./BaseScreen.state"

export class BaseScreen extends React.PureComponent<any, IBaseScreenState> {
    public state: IBaseScreenState = {
        loadingStatus: LoadingStatus.LOADING,
        isRefreshing: false,
        refreshCallback: (cb: () => void) => {
            console.warn("BaseScreen: No refresh function provided")
            cb()
        },
    }

    public componentDidMount() {
        SplashScreen.hide()
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
            console.log("BaseScreen:onRefresh: User refreshed screen.")
        })
    }

    private getCenteredText = (text: string) => {
        return (
            <View style={{ justifyContent: "center", height: "100%" }}>
                <Text>{text}</Text>
            </View>
        )
    }

    private getLoadingStatusComponent = () => {
        switch (this.state.loadingStatus) {
            case LoadingStatus.LOADING:
                return <LoadingIndicator />
            case LoadingStatus.NOT_AVAILABLE:
                return this.getCenteredText("No data available")
            case LoadingStatus.ERROR:
                return this.getCenteredText("Couldn't load")
            default:
                return null
        }
    }

    private getDisplayProp = (): null | {} => {
        return this.state.loadingStatus !== LoadingStatus.DONE ? { display: "none" } : null
    }
}
