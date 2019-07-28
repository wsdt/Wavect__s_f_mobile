import AsyncStorage from "@react-native-community/async-storage"
import React from "react"
import { Alert, ToastAndroid, View } from "react-native"
import { Text } from "react-native-elements"
// @ts-ignore
import ImagePicker  from "react-native-image-picker"
import Share from "react-native-share"
import { withNavigation } from "react-navigation"
import { BACKEND_MOBILE_API } from "../../../../../globalConfiguration/globalConfig"
import { getEmailMarked, getLocalUserId } from "../../../../controllers/LocalStorageController"
import { noInternetAvailable } from "../../../../controllers/WarningsController"
import { MajorBtnType, MajorButton } from "../../functional/MajorButton/MajorButton"
import { routes } from "../../system/TabRouter/SettingsScreenRouter/SettingsRoutes"
import { CHALLENGE_SOLVED_ID } from "./ChallengeLayerBar.constants"
import styles from "./ChallengeLayerBar.css"
import { IChallengeLayerBarProps } from "./ChallengeLayerBar.props"
import { IChallengeLayerBarState } from "./ChallengeLayerBar.state"


class ChallengeLayerBar extends React.PureComponent<IChallengeLayerBarProps, IChallengeLayerBarState> {
    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/email`

    public state: IChallengeLayerBarState = {
        isLoadingChallengeSolved: false,
        currChallengeSolved: false,
        source: { uri: ""},
    }

    private lastChallengeIdSolved: string | null = null

    private shareIt = () => {
        const options = {
            title: 'Proof it!',
            storageOptions:{
                skipBackup: true,
                path: 'images',
            },
        };


        ImagePicker.showImagePicker(options, (res) => {
            //console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User canceled Image Picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else {
                // this is the default breakpoint
                this.setState({
                    source: {uri: res.uri},
                });

                console.log(this.state.source)

                const shareOptions = {
                    title: 'Share via',
                    message: 'Hey Leute, ich habe die Challenge "Mach ein Foto von Kevin erfolgreich gelöst, hier das Foto:',
                    url: `data:${res.type};base64, ${res.data}`,
                }

                Share.open(shareOptions)
                    .then((res) => { console.log(res)})
                    .catch((err) => { err && console.log(err) });

                Share.shareSingle(shareOptions)
            }
        });
    }

    public render() {
        const { headline, subline } = this.props

        return (
            <View style={styles.mainComponent}>
                <View style={styles.bottomActionContainer}>
                    <Text style={styles.headline}>{headline}</Text>
                    <Text style={styles.subline}>{subline}</Text>

                    <View style={styles.btnContainer}>
                        {this.state.currChallengeSolved ? (
                            <MajorButton title="Challenge solved" btnType={MajorBtnType.HIGHLIGHTED} onPress={() => this.challengeAlreadySolved()} />
                        ) : (
                            <MajorButton
                                title="Abschließen"
                                btnType={MajorBtnType.PRIMARY}
                                onLongPress={() => this.execBtnAccept()}
                                onPress={() => ToastAndroid.show("Gedrückt halten, um die Challenge abzuschließen", ToastAndroid.SHORT)}
                                isLoading={this.state.isLoadingChallengeSolved}
                            />
                        )}
                    </View>
                </View>
            </View>
        )
    }

    public componentDidMount(): void {
        this.retrieveChallengeSolved()
    }

    private challengeAlreadySolved = () => {
      /*  Alert.alert(
            "Challenge solved",
            "Du hast diese Herausforderung bereits abgeschlossen. Bitte warte, bis sich der Sponsor mit dir in Verbindung setzt oder eine neue Herausforderung veröffentlicht wird.",
            [{ text: "OK" }],
            {
                cancelable: true,
            }
        )
    */

        this.shareIt()
    };

    private challengeSolved = async () => {
        this.setState({ isLoadingChallengeSolved: true })
        try {
            const rawResp = await fetch(`${ChallengeLayerBar.API_ENDPOINT}/current/${await getLocalUserId()}`, {
                // TODO: Test email with wavect.io
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
                    [{ text: "Super!" }],
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
                [{ text: "OK", onPress: () => this.props.navigation.navigate(routes.SettingsScreen) }],
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

            this.setState({ currChallengeSolved })
            this.props.setGrayscale(!this.state.currChallengeSolved)
        } catch (e) {
            console.error(e)
        }
    }

    private storeChallengeSolved = async () => {
        try {
            await AsyncStorage.setItem(CHALLENGE_SOLVED_ID, this.props.challengeId)
            this.setState({ currChallengeSolved: true })
            this.props.setGrayscale(!this.state.currChallengeSolved)
        } catch (e) {
            console.error(e)
        }
    }

}

export default withNavigation(ChallengeLayerBar)
