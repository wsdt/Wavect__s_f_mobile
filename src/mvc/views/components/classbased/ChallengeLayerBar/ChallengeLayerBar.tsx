import {ImagePickerResult} from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as SecureStore from 'expo-secure-store'
import React from 'react'
import {Alert, View} from 'react-native'
import {withNavigation} from 'react-navigation'
import {BACKEND_MOBILE_API} from '../../../../../globalConfiguration/globalConfig'
import {
    getPermissionAsync, pickImage, takeImage,
} from '../../../../controllers/FilePickerController/FilePickerController'
import {getEmailMarked, getLocalUserId} from '../../../../controllers/LocalStorageController/LocalStorageController'
import {logEvent, LogType} from '../../../../controllers/LoggingController/LoggingController'
import {t} from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import {shareMedia} from '../../../../controllers/ShareController/ShareController'
import {noInternetAvailable} from '../../../../controllers/WarningsController/WarningsController'
import {ApiResponse} from '../../../../models/ApiResponse'
import {AppText} from '../../functional/AppText/AppText'
import {FontType} from '../../functional/AppText/AppText.enum'
import {MajorBtnType, MajorButton} from '../../functional/MajorButton/MajorButton'
// IMPORT THE OLD SETTINGS HERE... WE STILL HAVE TO NAVIGATE DOWN THERE
import {routes as settingsRoutes} from '../../system/TabRouter/GeneralSettingsScreenRouter/GeneralSettingsScreenRoutes'
import {CHALLENGE_SOLVED_ID} from './ChallengeLayerBar.constants'
import styles from './ChallengeLayerBar.css'
import {IChallengeLayerBarProps} from './ChallengeLayerBar.props'
import {IChallengeLayerBarState} from './ChallengeLayerBar.state'
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
        const {headline, subline} = this.props

        return (
            <View style={styles.mainComponent}>
                <View style={styles.bottomActionContainer}>
                    <View style={{padding: 10}}>
                        <AppText style={styles.headline} font={FontType.HEAVY} size={23}>
                            {headline}
                        </AppText>
                        <AppText style={styles.subline}>{subline}</AppText>
                    </View>

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
                                // onPress={() => ToastAndroid.show(t(s.toast.onclick_btn_finish), ToastAndroid.SHORT)}
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
            [{text: t(s.dialog.challenge_already_solved.btn_ok)}],
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
        this.setState({isLoadingChallengeSolved: true})

        const userAbortedProcedure = () => {
            Alert.alert('User aborted!')
            this.setState({
                currChallengeSolved: false,
                isLoadingChallengeSolved: false,
            })
            logEvent(LogType.LOG, `${TAG}:userAbortedProcedure`, 'User aborted')
        }

        const openCameraGallery = () => {
            Alert.alert(
                'Beweis es',
                'Mach ein Foto oder Video!',
                [{text: 'Kamera öffnen', onPress: async () => shareChallengeSolved(await takeImage())},
                    {text: 'Galerie', onPress: async () => shareChallengeSolved(await pickImage())}],
                {
                    cancelable: false,
                },
            )
        }

        // Share it
        const shareChallengeSolved = async (result: ImagePickerResult) => {
            try {
                // @ts-ignore (bug in the lib)
                const response = await shareMedia(this.props.headline, this.props.sponsorName, result)
                if (response) {
                    this.sendChallengeSolvedEmailToSponsor()

                    this.setState({
                        currChallengeSolved: !response,
                        isLoadingChallengeSolved: true,
                    })
                } else {
                    userAbortedProcedure()
                    logEvent(LogType.LOG, `${TAG}:shareMedia`, 'Could not share src.')
                }
            } catch (e) {
                logEvent(LogType.ERROR, `${TAG}:challengeSolved`, `Couldn't open imagePicker -> ${JSON.stringify(e)}`)
            }
        }
        Alert.alert(
            t(s.dialog.challenge_almost_solved.title),
            t(s.dialog.challenge_almost_solved.msg),
            [
                {text: t(s.dialog.challenge_almost_solved.btn.ok), onPress: () => openCameraGallery()},
                {text: t(s.dialog.challenge_almost_solved.btn.cancel), onPress: () => userAbortedProcedure()},
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
                        onPress: () => this.props.navigation.navigate(settingsRoutes.PersonalSettingsFullpage),
                    },
                ],
                {
                    cancelable: true,
                }
            )
            // Usability: User leaves the UI Field without pressing OK
            this.props.navigation.navigate(settingsRoutes.PersonalSettingsFullpage)
        }
    }

    private retrieveChallengeSolved = async () => {
        const currChallengeSolved: boolean = false
        try {
            this.lastChallengeIdSolved = await SecureStore.getItemAsync(CHALLENGE_SOLVED_ID)

            if (this.lastChallengeIdSolved !== null) {
                // vals previously stored

                if (this.lastChallengeIdSolved === this.getCurrentChallengeSolvedId()) {
                    // current challenge already accepted
                    // TODO currChallengeSolved = true  de-comment, if cache should affect the challenge status!
                }
            }

            this.setState({currChallengeSolved})
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
            await SecureStore.setItemAsync(CHALLENGE_SOLVED_ID, this.getCurrentChallengeSolvedId())
            this.setState({currChallengeSolved: true})
            this.props.setGrayscale(!this.state.currChallengeSolved)
        } catch (e) {
            logEvent(LogType.ERROR, `${TAG}:storeChallengeSolved`, null, e)
        }
    }
}

export default withNavigation(ChallengeLayerBar)
