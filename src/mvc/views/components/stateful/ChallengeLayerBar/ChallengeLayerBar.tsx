import AsyncStorage from "@react-native-community/async-storage"
import React from "react"
import {Alert, View} from "react-native"
import {Text} from "react-native-elements"
import {withNavigation} from "react-navigation"
import {BACKEND_MOBILE_API} from "../../../../../globalConfiguration/globalConfig"
import {getEmailMarked, getLocalUserId} from "../../../../controllers/LocalStorageController"
import {noInternetAvailable} from "../../../../controllers/WarningsController"
import {MajorBtnType, MajorButton} from "../../functional/MajorButton/MajorButton"
import {routes} from "../../system/TabRouter/SettingsScreenRouter/SettingsRoutes"
import {CHALLENGE_SOLVED_ID} from "./ChallengeLayerBar.constants"
import styles from "./ChallengeLayerBar.css"
import {IChallengeLayerBarProps} from "./ChallengeLayerBar.props"
import {IChallengeLayerBarState} from "./ChallengeLayerBar.state"

class ChallengeLayerBar extends React.PureComponent<IChallengeLayerBarProps, IChallengeLayerBarState> {
    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/email`

    public state: IChallengeLayerBarState = {
        isLoadingChallengeSolved: false,
        currChallengeSolved: false,
    }

    private lastChallengeIdSolved: string | null = null

    public render() {
        const {headline, subline} = this.props

        return (
            <View style={styles.mainComponent}>
                <View style={styles.bottomActionContainer}>
                    <Text style={styles.headline}>{headline}</Text>
                    <Text style={styles.subline}>{subline}</Text>

                    <View style={styles.btnContainer}>
                        {
                            (this.state.currChallengeSolved) ?
                                <MajorButton title="Challenge solved" btnType={MajorBtnType.HIGHLIGHTED}
                                             onPress={() => this.challengeAlreadySolved()}/>
                                : <MajorButton title="Abschließen" btnType={MajorBtnType.PRIMARY}
                                               onPress={() => this.execBtnAccept()} isLoading={this.state.isLoadingChallengeSolved}/>
                        }
                    </View>
                </View>
            </View>
        )
    }

    public componentDidMount(): void {
        this.retrieveChallengeSolved()
    }

    private challengeAlreadySolved = () => {
        Alert.alert(
            "Challenge solved",
            "Du hast diese Herausforderung bereits abgeschlossen. Bitte warte, bis sich der Sponsor mit dir in Verbindung setzt oder eine neue Herausforderung veröffentlicht wird.",
            [{text: "OK"}],
            {
                cancelable: true,
            }
        )
    }

    private challengeSolved = async () => {
        this.setState({isLoadingChallengeSolved: true})
        try {
            const rawResp = await fetch(`${ChallengeLayerBar.API_ENDPOINT}/current/${await getLocalUserId()}`, { // TODO: Test email with wavect.io
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.props.sponsorEmail,
                }),
            })

            const res = await rawResp.json()
            if (res.error !== null && res.error !== undefined) {
                // might return {}
                console.error(res.error)
            } else {
                this.storeChallengeSolved()

                this.setState({
                    currChallengeSolved: true,
                    isLoadingChallengeSolved: false,
                })

                Alert.alert(
                    "Sponsor notified",
                    "Wir haben den Sponsor der aktuellen Herausforderung benachrichtigt! Dieser sollte dich bzgl. Sponsoring demnächst kontaktieren.",
                    [{text: "Super!"}],
                    {
                        cancelable: true,
                    }
                )

                console.log("ChallengeLayerBar:challengeSolved: Sent email to sponsor.")
            }
        } catch (e) {
            console.error(e)
            noInternetAvailable()
        }
    }

    private execBtnAccept = async () => {
        if (await getEmailMarked()) {
            this.challengeSolved()
        } else {
            Alert.alert(
                "Einen Moment noch!",
                "Wir benötigen deine E-Mail Adresse damit dich unsere Sponsoren kontaktieren können.   ",
                [{text: "OK", onPress: () => this.props.navigation.navigate(routes.SettingsScreen)}],
                {
                    cancelable: true,
                }
            )
            // Usability: User leaves the UI Field without pressing OK
            this.props.navigation.navigate(routes.SettingsScreen)
        }
    }

    private retrieveChallengeSolved = async () => {
        let currChallengeSolved: boolean = false
        try {
            this.lastChallengeIdSolved = await AsyncStorage.getItem(CHALLENGE_SOLVED_ID)

            if (this.lastChallengeIdSolved !== null) {
                // vals previously stored

                if (this.lastChallengeIdSolved === this.props.challengeId) {
                    // current challenge already accepted
                    currChallengeSolved = true
                }
            }

            this.setState({currChallengeSolved})
            this.props.setGrayscale(!this.state.currChallengeSolved)
        } catch (e) {
            console.error(e)
        }
    }

    private storeChallengeSolved = async () => {
        try {
            await AsyncStorage.setItem(CHALLENGE_SOLVED_ID, this.props.challengeId)
            this.setState({currChallengeSolved: true})
            this.props.setGrayscale(!this.state.currChallengeSolved)
        } catch (e) {
            console.error(e)
        }
    }
}

export default withNavigation(ChallengeLayerBar)
