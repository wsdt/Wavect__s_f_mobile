import * as React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { withNavigation } from 'react-navigation'
import globalStyles from '../../../GlobalStyles.css'
import { ChallengeInformationModal } from '../../functional/ChallengeInformationModal/ChallengeInformationModal'
import { ChallengeTypeIcon } from '../../functional/ChallengeTypeIcon/ChallengeTypeIcon'
import { CompanyLogo } from '../../functional/CompanyLogo/CompanyLogo'
import { GrayColorImg } from '../../functional/GrayColorImg/GrayColorImg'
import { ILoadingContext, LoadingHoc, LoadingStatus } from '../../system/HOCs/LoadingHoc'
import { routes } from '../../system/TabRouter/HomeScreenRouter/HomeRoutes'
import ChallengeLayerBar from '../ChallengeLayerBar/ChallengeLayerBar'
import styles from './ChallengeFullpage.css'
import { IChallengeFullpageProps } from './ChallengeFullpage.props'
import { IChallengeFullpageState } from './ChallengeFullpage.state'

class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
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
                        <GrayColorImg isGrayscale={this.state.isGrayscale}>
                            <View onTouchStart={() => (this.state.modalVisibility ? this.setState({ modalVisibility: false }) : null)}>
                                {challengeInformation ? (
                                    <ChallengeInformationModal isVisible={this.state.modalVisibility} information={challengeInformation} />
                                ) : null}
                                <TouchableWithoutFeedback onPress={() => this.toggleModal()}>
                                    <FastImage
                                        source={{
                                            priority: FastImage.priority.high,
                                            uri: bgImage.uri,
                                        }}
                                        style={[styles.backgroundImage, globalStyles.radius]}
                                        onLoad={() => this.loadingContext.setLoading(LoadingStatus.DONE)}
                                        // onLoadStart={() => this.loadingContext.setLoading(LoadingStatus.LOADING)} // TODO: onLoadStart is the only callback which is called (lib-bug presumbly)
                                        onError={() => this.loadingContext.setLoading(LoadingStatus.ERROR)}
                                    />
                                </TouchableWithoutFeedback>
                                {this.getChallengeView()}
                            </View>
                        </GrayColorImg>
                    )
                }}
            </LoadingHoc.Consumer>
        )
    }

    public componentWillUnmount(): void {
        this.abortController.abort()
    }

    private toggleModal = () => {
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
                />
            </>
        )
    }
}

export default withNavigation(ChallengeFullpage)
