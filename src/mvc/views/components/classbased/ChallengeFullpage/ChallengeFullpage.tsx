import * as React from 'react'
import {
    TouchableWithoutFeedback,
    View,
    Image,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { ChallengeInformationModal } from '../../functional/ChallengeInformationModal/ChallengeInformationModal'
import { ChallengeTypeIcon } from '../../functional/ChallengeTypeIcon/ChallengeTypeIcon'
import { CompanyLogo } from '../../functional/CompanyLogo/CompanyLogo'
import { ILoadingContext, LoadingHoc } from '../../system/HOCs/LoadingHoc'
import { routes } from '../../system/TabRouter/HomeScreenRouter/HomeRoutes'
import ChallengeLayerBar from '../ChallengeLayerBar/ChallengeLayerBar'
import styles from './ChallengeFullpage.css'
import { IChallengeFullpageProps } from './ChallengeFullpage.props'
import { IChallengeFullpageState } from './ChallengeFullpage.state'
import globalStyles from "../../../GlobalStyles.css";

class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true, // TODO See https://blog.expo.io/filtering-images-with-expo-ffd8f053bc85
        modalVisibility: false,
    }
    private loadingContext!: ILoadingContext
    private abortController: AbortController = new AbortController() // memory safety/leaks avoidance

    public render() {
        const { bgImage, challengeInformation } = this.props.challenge

        return (
            <LoadingHoc.Consumer>
                {contextMethods => {
                    this.loadingContext = contextMethods
                    return (
                        <View onTouchStart={() => (this.state.modalVisibility ? this.setState({ modalVisibility: false }) : null)}>
                            {challengeInformation ? (
                                <ChallengeInformationModal isVisible={this.state.modalVisibility} information={challengeInformation} />
                            ) : null}

                            <TouchableWithoutFeedback onPress={() => this.toggleModal()}>
                                <Image
                                    source={bgImage}
                                    style={[styles.backgroundImage, globalStyles.radius]}
                                />
                            </TouchableWithoutFeedback>
                            {this.getChallengeView()}
                        </View>
                    )
                }}
            </LoadingHoc.Consumer>
        )
    }

    public componentWillUnmount(): void {
        this.abortController.abort()
    }

    private toggleModal = () => {
        console.warn("Toggled!")
        this.setState({ modalVisibility: !this.state.modalVisibility })
    }

    private getChallengeView = (): React.ReactElement => {
        const { id, headline, subline, sponsor, majorCategory, expirationInMs, whyDoesOrganizationSponsor, bgImage } = this.props.challenge

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
                                challengeBgImage: bgImage,
                            })
                        }}
                    />
                    <ChallengeTypeIcon type={majorCategory} isGrayscale={this.state.isGrayscale} />
                </View>

                <ChallengeLayerBar
                    headline={headline}
                    sponsorName={sponsor.name}
                    setGrayscale={(isGrayscale: boolean) => this.setState({ isGrayscale })}
                    subline={subline}
                    expirationInMs={expirationInMs}
                    challengeId={id}
                    sponsorEmail={sponsor.email}
                    sponsorLogo={sponsor.logoUri}
                />
            </>
        )
    }
}

export default withNavigation(ChallengeFullpage)
