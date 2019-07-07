import * as React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import SplashScreen from "react-native-splash-screen"
import { ScrollView } from "react-navigation"
import { LoadingIndicator } from "../../components/functional/LoadingIndicator/LoadingIndicator"
import { LoadingContext, LoadingStatus } from "../../components/system/HOCs/LoadingHoc"
import globalStyles from "../../GlobalStyles.css"
import styles from "./BaseScreen.css"
import { IBaseScreenState } from "./BaseScreen.state"

export class BaseScreen extends React.PureComponent<any, IBaseScreenState> {
    public state: IBaseScreenState = {
        loadingStatus: LoadingStatus.LOADING,
        isRefreshing: false,
        refreshCallback: () => console.warn("BaseScreen: No refresh function provided")
    }

    public componentDidMount() {
        SplashScreen.hide()
    }

    public setLoading = (loadingStatus: LoadingStatus) => {
        this.setState({ loadingStatus })
    }

    public render() {
        return (
            <LoadingContext.Provider value={(isLoading: LoadingStatus) => this.setLoading(isLoading)}>
                <View style={styles.page}>
                    {this.getLoadingStatusComponent()}
                    <ScrollView style={this.getDisplayProp()} contentContainerStyle={globalStyles.scrollViewContainer}>
                        {this.props.children}
                    </ScrollView>
                </View>
            </LoadingContext.Provider>
        )
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
