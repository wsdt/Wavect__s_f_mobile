import * as React from "react"
import { ImageBackground, View, Image } from "react-native"
import { withNavigation } from "react-navigation"
import globalStyles from "../../../GlobalStyles.css"
import { ChallengeTypeIcon } from "../../functional/ChallengeTypeIcon/ChallengeTypeIcon"
import { CompanyLogo } from "../../functional/CompanyLogo/CompanyLogo"
import { GrayColorImg } from "../../functional/GrayColorImg/GrayColorImg"
import { ILoadingContext, LoadingHoc, LoadingStatus } from "../../system/HOCs/LoadingHoc"
import { routes } from "../../system/TabRouter/HomeScreenRouter/HomeRoutes"
import ChallengeLayerBar from "../ChallengeLayerBar/ChallengeLayerBar"
import styles from "./ChallengeFullpage.css"
import { IChallengeFullpageProps } from "./ChallengeFullpage.props"
import { IChallengeFullpageState } from "./ChallengeFullpage.state"

class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
    }
    private loadingContext!: ILoadingContext

    public render() {
        // destructure
        // const { bgImage } = this.props.challenge
        // destructure
        const { bgImage } = this.props.challenge

        return (
            <LoadingHoc.Consumer>
                {contextMethods => {
                    this.loadingContext = contextMethods
                    return (
                        <GrayColorImg isGrayscale={this.state.isGrayscale}>
                            <>
                                <Image
                                    source={bgImage}
                                    style={[styles.backgroundImage, globalStyles.radius]}
                                    onLoad={this.onLoad}
                                    onLoadStart={() => this.loadingContext.setLoading(LoadingStatus.LOADING)}
                                    onError={() => this.loadingContext.setLoading(LoadingStatus.ERROR)}
                                />
                                {this.getChallengeView()}
                            </>
                        </GrayColorImg>
                    )
                }}
            </LoadingHoc.Consumer>
        )
    }

    public render1() {
        // destructure
        const { bgImage } = this.props.challenge

        return (
            <LoadingHoc.Consumer>
                {contextMethods => {
                    this.loadingContext = contextMethods
                    return (
                        <GrayColorImg isGrayscale={this.state.isGrayscale}>
                            <ImageBackground
                                source={bgImage}
                                imageStyle={globalStyles.radius}
                                onLoad={this.onLoad}
                                onLoadStart={() => this.loadingContext.setLoading(LoadingStatus.LOADING)}
                                onError={() => this.loadingContext.setLoading(LoadingStatus.ERROR)}
                                style={globalStyles.pageContainer}
                            >
                                {this.getChallengeView()}
                            </ImageBackground>
                        </GrayColorImg>
                    )
                }}
            </LoadingHoc.Consumer>
        )
    }

    private getChallengeView = (): React.ReactElement => {
        const { id, headline, subline, sponsor, majorCategory, expirationInMs, whyDoesOrganizationSponsor } = this.props.challenge
        // test sponsor --> fetch here.. so we can destructure down there

        return (
            <>
                <View style={styles.top}>
                    <CompanyLogo
                        companyLogoUri={sponsor.logoUri}
                        isGrayscale={this.state.isGrayscale}
                        onPressed={() => {
                            this.props.navigation.navigate(routes.SponsorFullpage, {
                                sponsor,
                                whySponsor: whyDoesOrganizationSponsor,
                            })
                        }}
                    />
                    <ChallengeTypeIcon type={majorCategory} />
                </View>
                <ChallengeLayerBar
                    headline={headline}
                    setGrayscale={(isGrayscale: boolean) => this.setState({ isGrayscale })}
                    subline={subline}
                    expirationInMs={expirationInMs}
                    challengeId={id}
                    sponsorEmail={sponsor.email}
                />
            </>
        )
    }

    private onLoad = () => {
        this.loadingContext.setLoading(LoadingStatus.DONE)
    }
}

export default withNavigation(ChallengeFullpage)
