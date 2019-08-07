import * as React from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { withNavigation } from 'react-navigation'
import globalStyles from '../../../GlobalStyles.css'
import { ChallengeTypeIcon } from '../../functional/ChallengeTypeIcon/ChallengeTypeIcon'
import { CompanyLogo } from '../../functional/CompanyLogo/CompanyLogo'
import { GrayColorImg } from '../../functional/GrayColorImg/GrayColorImg'
import { ILoadingContext, LoadingHoc, LoadingStatus } from '../../system/HOCs/LoadingHoc'
import { routes } from '../../system/TabRouter/HomeScreenRouter/HomeRoutes'
import ChallengeLayerBar from '../ChallengeLayerBar/ChallengeLayerBar'
import styles from './ChallengeFullpage.css'
import { IChallengeFullpageProps } from './ChallengeFullpage.props'
import { IChallengeFullpageState } from './ChallengeFullpage.state'
import {Fade} from "../_Extendables/animations/Fade/Fade";

class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    public state: IChallengeFullpageState = {
        isGrayscale: true,
        isLoading: true,
    }
    private loadingContext!: ILoadingContext

    public render() {
        const { bgImage } = this.props.challenge

        return <LoadingHoc.Consumer>
                {contextMethods => {
                    this.loadingContext = contextMethods
                    return <Fade visible={true} fadeDuration={200}><GrayColorImg isGrayscale={this.state.isGrayscale}>
                                <>
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
                                    {this.getChallengeView()}
                                </>
                            </GrayColorImg>
                    </Fade>
                }}
            </LoadingHoc.Consumer>
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