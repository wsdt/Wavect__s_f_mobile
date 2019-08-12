import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { Alert, ToastAndroid, View } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import * as _schema from '../../../../../assets/translations/_schema.json'
import { BACKEND_MOBILE_API } from '../../../../../globalConfiguration/globalConfig'
import { getEmailMarked, getLocalUserId } from '../../../../controllers/LocalStorageController/LocalStorageController'
import { logEvent, LogType } from '../../../../controllers/LoggingController/LoggingController'
import { t } from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import { openFilePicker } from '../../../../controllers/SocialController/FilePickerController'
import { shareMedia } from '../../../../controllers/SocialController/ShareController'
import { noInternetAvailable } from '../../../../controllers/WarningsController'
import { ApiResponse } from '../../../../models/ApiResponse'
import { MajorBtnType, MajorButton } from '../../functional/MajorButton/MajorButton'
import { routes } from '../../system/TabRouter/SettingsScreenRouter/SettingsRoutes'
import { CHALLENGE_SOLVED_ID } from './ChallengeLayerBar.constants'
import styles from './ChallengeLayerBar.css'
import { IChallengeLayerBarProps } from './ChallengeLayerBar.props'
import { IChallengeLayerBarState } from './ChallengeLayerBar.state'

const TAG = 'ChallengeLayerBar'

class ChallengeLayerBar extends React.PureComponent<IChallengeLayerBarProps, IChallengeLayerBarState> {
    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/email`

    public state: IChallengeLayerBarState = {
        isLoadingChallengeSolved: false,
        currChallengeSolved: false,
    }

    private lastChallengeIdSolved: string | null = null

    public render() {
        const { headline, subline } = this.props

        return (
            <View style={styles.mainComponent}>
                <View style={styles.bottomActionContainer}>
                    <Text style={styles.headline}>{headline}</Text>
                    <Text style={styles.subline}>{subline}</Text>

                    <View style={styles.btnContainer}>
                        {this.state.currChallengeSolved ? (
                            <MajorButton title={t(_schema.homescreen.challengelayerbar.btn.accomplished)} btnType={MajorBtnType.HIGHLIGHTED} onPress={() => this.challengeAlreadySolved()} />
                        ) : (
                            <MajorButton
                                title={t(_schema.homescreen.challengelayerbar.btn.finish)}
                                btnType={MajorBtnType.PRIMARY}
                                onLongPress={() => this.execBtnAccept()}
                                onPress={() => ToastAndroid.show(t(_schema.homescreen.challengelayerbar.toast.onclick_btn_finish), ToastAndroid.SHORT)}
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
        Alert.alert(
            t(_schema.homescreen.challengelayerbar.dialog.challenge_already_solved.title),
            t(_schema.homescreen.challengelayerbar.dialog.challenge_already_solved.msg),
            [{ text: t(_schema.homescreen.challengelayerbar.dialog.challenge_already_solved.btn_ok) }],
            {
                cancelable: true,
            }
        )
    }

    private sendChallengeSolvedEmailToSponsor = async () => {
        try {
            const apiRes: ApiResponse = await (await fetch(`${ChallengeLayerBar.API_ENDPOINT}/current/${await getLocalUserId()}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.props.sponsorEmail,
                }),
            })).json()

            if (apiRes.err !== null && apiRes.err !== undefined) {
                // might return {}
                logEvent(LogType.ERROR, `${TAG}:challengeSolved`, apiRes.err)
            } else {
                this.storeChallengeSolved()

                Alert.alert(
                    t(_schema.homescreen.challengelayerbar.dialog.sponsor_notified.title),
                    t(_schema.homescreen.challengelayerbar.dialog.sponsor_notified.msg),
                    [{ text: t(_schema.homescreen.challengelayerbar.dialog.sponsor_notified.btn_ok) }],
                    {
                        cancelable: true,
                    }
                )

                logEvent(LogType.LOG, `${TAG}:challengeSolved`, 'Sent email to sponsor')
            }
        } catch (e) {
            console.error(e)
            noInternetAvailable()
        }
    }

    private challengeSolved = async () => {
        this.setState({ isLoadingChallengeSolved: true })

        const userAbortedProcedure = () => {
            ToastAndroid.show(t(_schema.homescreen.challengelayerbar.toast.onabort_imgpicker_share), ToastAndroid.SHORT)
            this.setState({
                currChallengeSolved: false,
                isLoadingChallengeSolved: false,
            })
            logEvent(LogType.LOG, `${TAG}:userAbortedProcedure`, 'User aborted')
        }

        // Share it
        try {
            const res = await openFilePicker()

            if (res.error || res.didCancel) {
                userAbortedProcedure()
                logEvent(LogType.LOG, `${TAG}:challengeSolved`, 'User did not choose a file')
            } else {
                const wasShareSuccessful = await shareMedia(this.props.headline, this.props.sponsorName, res)

                if (wasShareSuccessful) {
                    this.sendChallengeSolvedEmailToSponsor()
                }
                this.setState({
                    currChallengeSolved: wasShareSuccessful,
                    isLoadingChallengeSolved: false,
                })
            }
        } catch (e) {
            logEvent(LogType.ERROR, `${TAG}:challengeSolved`, `Couldn't open imagePicker -> ${JSON.stringify(e)}`)
        }
    }

    private execBtnAccept = async () => {
        if (await getEmailMarked()) {
            this.challengeSolved()
        } else {
            Alert.alert(
                t(_schema.homescreen.challengelayerbar.dialog.settings_not_set.title),
                t(_schema.homescreen.challengelayerbar.dialog.settings_not_set.msg),
                [{ text: t(_schema.homescreen.challengelayerbar.dialog.settings_not_set.btn_ok), onPress: () => this.props.navigation.navigate(routes.SettingsScreen) }],
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
