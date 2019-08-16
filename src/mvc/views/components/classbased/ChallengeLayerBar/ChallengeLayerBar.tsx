import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { Alert, ToastAndroid, View } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { BACKEND_MOBILE_API } from '../../../../../globalConfiguration/globalConfig'
import { openFilePicker } from '../../../../controllers/FilePickerController/FilePickerController'
import { getEmailMarked, getLocalUserId } from '../../../../controllers/LocalStorageController/LocalStorageController'
import { logEvent, LogType } from '../../../../controllers/LoggingController/LoggingController'
import { t } from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import { shareMedia } from '../../../../controllers/ShareController/ShareController'
import { noInternetAvailable } from '../../../../controllers/WarningsController/WarningsController'
import { ApiResponse } from '../../../../models/ApiResponse'
import { MajorBtnType, MajorButton } from '../../functional/MajorButton/MajorButton'
import { routes } from '../../system/TabRouter/SettingsScreenRouter/SettingsRoutes'
import { CHALLENGE_SOLVED_ID } from './ChallengeLayerBar.constants'
import styles from './ChallengeLayerBar.css'
import { IChallengeLayerBarProps } from './ChallengeLayerBar.props'
import { IChallengeLayerBarState } from './ChallengeLayerBar.state'
import s from './ChallengeLayerBar.translations'

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
                            <MajorButton
                                title={t(s.btn.accomplished)}
                                btnType={MajorBtnType.HIGHLIGHTED}
                                onPress={() => this.challengeAlreadySolved()}
                            />
                        ) : (
                            <MajorButton
                                title={t(s.btn.finish)}
                                btnType={MajorBtnType.PRIMARY}
                                onLongPress={() => this.execBtnAccept()}
                                onPress={() => ToastAndroid.show(t(s.toast.onclick_btn_finish), ToastAndroid.SHORT)}
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
            t(s.dialog.challenge_already_solved.title),
            t(s.dialog.challenge_already_solved.msg),
            [{ text: t(s.dialog.challenge_already_solved.btn_ok) }],
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
            ToastAndroid.show(t(s.toast.onabort_imgpicker_share), ToastAndroid.SHORT)
            this.setState({
                currChallengeSolved: false,
                isLoadingChallengeSolved: false,
            })
            logEvent(LogType.LOG, `${TAG}:userAbortedProcedure`, 'User aborted')
        }

        // Share it
        const shareChallengeSolved = async () => {
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
        Alert.alert(
            t(s.dialog.challenge_almost_solved.title),
            t(s.dialog.challenge_almost_solved.msg),
            [
                { text: t(s.dialog.challenge_almost_solved.btn.ok), onPress: () => shareChallengeSolved() },
                { text: t(s.dialog.challenge_almost_solved.btn.cancel), onPress: () => userAbortedProcedure() },
            ],
            {
                cancelable: true,
            }
        )
    }

    private execBtnAccept = async () => {
        if (await getEmailMarked()) {
            this.challengeSolved()
        } else {
            Alert.alert(
                t(s.dialog.settings_not_set.title),
                t(s.dialog.settings_not_set.msg),
                [
                    {
                        text: t(s.dialog.settings_not_set.btn_ok),
                        onPress: () => this.props.navigation.navigate(routes.SettingsScreen),
                    },
                ],
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

                if (this.lastChallengeIdSolved === this.getCurrentChallengeSolvedId()) {
                    // current challenge already accepted
                    currChallengeSolved = true
                }
            }

            this.setState({ currChallengeSolved })
            this.props.setGrayscale(!this.state.currChallengeSolved)
        } catch (e) {
            logEvent(LogType.ERROR, `${TAG}:retrieveChallengeSolved`, null, e)
        }
    }

    private getCurrentChallengeSolvedId = (): string => {
        return `${this.props.challengeId}_${this.props.headline}_${this.props.sponsorName}_${this.props.subline}` // TODO: dirty workaround in the meantime (needs to be unique for each challenge, otherwise new challenge automatically done when previous one accomplished)
    }

    private storeChallengeSolved = async () => {
        try {
            await AsyncStorage.setItem(CHALLENGE_SOLVED_ID, this.getCurrentChallengeSolvedId())
            this.setState({ currChallengeSolved: true })
            this.props.setGrayscale(!this.state.currChallengeSolved)
        } catch (e) {
            logEvent(LogType.ERROR, `${TAG}:storeChallengeSolved`, null, e)
        }
    }
}

export default withNavigation(ChallengeLayerBar)
