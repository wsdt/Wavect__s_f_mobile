import React from 'react'
import { ScrollView, View } from 'react-native'
import {Button, Card, CheckBox, Icon, Input} from 'react-native-elements'
import { withMappedNavigationParams } from 'react-navigation-props-mapper'
import { BACKEND_MOBILE_API } from '../../../../../globalConfiguration/globalConfig'
import { cachedFetch, putCache } from '../../../../controllers/CacheController/CacheController'
import { CACHE_KEY_SETTINGS } from '../../../../controllers/CacheController/CacheController.constants'
import { getLocalUserId, markEmailAsCreated } from '../../../../controllers/LocalStorageController/LocalStorageController'
import { logEvent, LogType } from '../../../../controllers/LoggingController/LoggingController'
import { t } from '../../../../controllers/MultiLingualityController/MultiLingualityController'
import { noInternetAvailable } from '../../../../controllers/WarningsController/WarningsController'
import globalStyles from '../../../GlobalStyles.css'
import { AppText } from '../../functional/AppText/AppText'
import { FontType } from '../../functional/AppText/AppText.enum'
import { ILoadingContext, LoadingHoc, LoadingStatus } from '../../system/HOCs/LoadingHoc'
import styles from './PersonalSettingsFullpage.css'
import { ISettingsFullpageState } from './PersonalSettingsFullpage.state'
import s from './PersonalSettingsFullpage.translations'

const TAG: string = 'PersonalSettingsFullpage'

export class PersonalSettingsFullpage extends React.PureComponent<any, ISettingsFullpageState> {
    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/settings`
    private static EMAIL_REGEX: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    public state: ISettingsFullpageState = {
        hasAcceptedDataPrivacy: false,
        email: '',
        validEmail: false,
        isSavingSettings: false,
    }
    private userId: string = ''
    private loadingContext!: ILoadingContext
    private abortController: AbortController = new AbortController() // memory safety/leaks avoidance

    public componentDidMount(): void {
        this.getUserSettings(false)
        this.loadingContext.setRefresh((cb: () => void) => this.getUserSettings(true, cb))
    }

    public render() {
        return (
            <View style={[globalStyles.pageContainer]}>
                <LoadingHoc.Consumer>
                    {contextMethods => {
                        this.loadingContext = contextMethods
                        return this.getSettingsView()
                    }}
                </LoadingHoc.Consumer>
            </View>
        )
    }

    public componentWillUnmount(): void {
        this.abortController.abort()
    }

    private getSettingsView = () => {
        const isFormSubmittable = this.isFormSubmittable()
        return (
            <ScrollView contentContainerStyle={styles.containerStyle} style={styles.scrollStyle}>
                <AppText style={styles.introText}>{t(s.intro)}</AppText>

                <Card containerStyle={styles.cardStyle}>
                    <Input
                        value={this.state.email}
                        onChangeText={text => this.emailValidation(text)}
                        inputStyle={{ fontFamily: FontType.STANDARD }}
                        errorStyle={{ fontFamily: FontType.STANDARD }}
                        label={t(s.form.input_mail.lbl)}
                        placeholder={t(s.form.input_mail.placeholder)}
                        leftIcon={<Icon name='envelope' type='font-awesome' iconStyle={styles.icon} />}
                        shake={true}
                        errorMessage={this.state.validEmail ? '' : t(s.form.input_mail.errorMsg)}
                    />
                </Card>

                <CheckBox
                    checked={this.state.hasAcceptedDataPrivacy}
                    checkedColor='#000'
                    title={t(s.form.checkbox_dataprivacy)}
                    textStyle={{ fontFamily: FontType.BOLD }}
                    onPress={() => this.setState({ hasAcceptedDataPrivacy: !this.state.hasAcceptedDataPrivacy })}
                />

                <Button
                    type='outline'
                    title={t(s.form.btn.save)}
                    titleStyle={ styles.buttonTextStyle }
                    raised={isFormSubmittable}
                    containerStyle={styles.buttonStyle}
                    loading={this.state.isSavingSettings}
                    disabled={!isFormSubmittable}
                    icon={<Icon name='save' type='font-awesome' />}
                    onPress={this.postUserSettings}
                />
            </ScrollView>
        )
    }

    private getUserId = async () => {
        if (!this.userId) {
            // save as instance var to not fetch on every render from local storage
            this.userId = await getLocalUserId()
        }

        return this.userId
    }

    // Not recommended, use superior cache implementation please
    private getUserSettings = (reload: boolean, cb?: () => void) => {
        cachedFetch(this, CACHE_KEY_SETTINGS, this.loadingContext, reload, async () => {
            fetch(`${PersonalSettingsFullpage.API_ENDPOINT}/${await this.getUserId()}`, { signal: this.abortController.signal })
                .then(res => res.json())
                .then(data => {
                    if (data.res) {
                        const apiRes = {
                            hasAcceptedDataPrivacy: data.res.hasAcceptedDataPrivacy,
                            email: data.res.email,
                            validEmail: true,
                        }
                        this.setState(apiRes)
                        putCache(CACHE_KEY_SETTINGS, apiRes)

                        logEvent(LogType.LOG, `${TAG}:getUserSettings`, 'Received user settings')
                    } else {
                        logEvent(LogType.LOG, `${TAG}:getUserSettings`, 'No user settings previously saved')
                    }

                    // Do NOT set LoadingStatus.NOT_AVAILABLE as Settings might be null
                    this.loadingContext.setLoading(LoadingStatus.DONE)

                    if (cb) {
                        cb()
                    }
                })
                .catch(e => {
                    console.error(e)
                    this.loadingContext.setLoading(LoadingStatus.ERROR)
                    if (cb) {
                        cb()
                    }
                })
        })
    }

    private postUserSettings = () => {
        this.setState({ isSavingSettings: true }, async () => {
            try {
                const rawResp = await fetch(`${PersonalSettingsFullpage.API_ENDPOINT}/${await this.getUserId()}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        hasAcceptedDataPrivacy: this.state.hasAcceptedDataPrivacy,
                    }),
                })

                const res = await rawResp.json()

                // mark the email as created, --> "Accept" Button works now.
                markEmailAsCreated()

                logEvent(LogType.LOG, `${TAG}:postUserSettings`, `Tried to save userSettings -> ${JSON.stringify(res)}`)
            } catch (e) {
                noInternetAvailable()
                console.error(e)
            } finally {
                this.setState({ isSavingSettings: false })
            }
        })
    }

    private emailValidation = (email: string) => {
        this.setState({ email, validEmail: PersonalSettingsFullpage.EMAIL_REGEX.test(email) })
    }

    private isFormSubmittable = (): boolean => {
        return this.state.validEmail && this.state.hasAcceptedDataPrivacy
    }
}

export default withMappedNavigationParams()(PersonalSettingsFullpage)
