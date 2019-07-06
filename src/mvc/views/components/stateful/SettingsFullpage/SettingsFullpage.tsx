import React from "react"
import {View} from "react-native"
import {Button, CheckBox, Icon, Input, Text} from "react-native-elements"
import {BACKEND_MOBILE_API} from "../../../../../globalConfiguration/globalConfig"
import {getLocalUserId, markEmailAsCreated} from "../../../../controllers/LocalStorageController"
import {noInternetAvailable} from "../../../../controllers/WarningsController"
import globalStyles from "../../../GlobalStyles.css"
import {LoadingContext, LoadingStatus} from "../../system/HOCs/LoadingHoc"
import styles from "./SettingsFullpage.css"
import {ISettingsFullpageState} from "./SettingsFullpage.state"

export class SettingsFullpage extends React.PureComponent<any, ISettingsFullpageState> {
    private static API_ENDPOINT = `${BACKEND_MOBILE_API}/settings`
    private static EMAIL_REGEX: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    public state: ISettingsFullpageState = {
        hasAcceptedDataPrivacy: false,
        email: "",
        validEmail: false,
        isSavingSettings: false,
    }
    private userId: string = ""
    private setLoading!: (loadingStatus: LoadingStatus) => void

    public componentDidMount(): void {
        this.getUserSettings()
    }

    public render() {
        return <View style={[globalStyles.pageContainer, styles.fullpageWidth]}>
            <LoadingContext.Consumer>
                {setLoading => {
                    this.setLoading = setLoading
                    return this.getSettingsView()
                }}
            </LoadingContext.Consumer>
        </View>
    }

    private getSettingsView = () => {
        const isFormSubmittable = this.isFormSubmittable()
        return (
            <>
                <Text style={styles.row}>
                    Deine E-Mail Adresse wird benötigt, um dich bzgl. gewonnenen Rabatten, Gutscheinen oder
                    Produkten/Services zu kontaktieren.
                </Text>

                <Input
                    value={this.state.email}
                    onChangeText={text => this.emailValidation(text)}
                    containerStyle={styles.row}
                    label="E-Mail"
                    placeholder=" Deine E-Mail"
                    leftIcon={<Icon name="envelope" type="font-awesome"/>}
                    shake={true}
                    errorMessage={this.state.validEmail ? "" : "Bitte gib eine gültige E-Mail an."}
                />

                <CheckBox
                    checked={this.state.hasAcceptedDataPrivacy}
                    containerStyle={styles.row}
                    checkedColor="#000"
                    title="Ich verstehe und akzeptiere, dass meine E-Mail-Adresse bei erfolgreichem Abschluss einer Herausforderung an den angegebenen Sponsor übermittelt wird."
                    onPress={() => this.setState({hasAcceptedDataPrivacy: !this.state.hasAcceptedDataPrivacy})}
                />

                <Button
                    containerStyle={styles.row}
                    type="outline"
                    title=" Speichern"
                    raised={isFormSubmittable}
                    loading={this.state.isSavingSettings}
                    disabled={!isFormSubmittable}
                    icon={<Icon name="save" type="font-awesome"/>}
                    onPress={this.postUserSettings}
                />
            </>
        )
    }

    private getUserId = async () => {
        if (!this.userId) {
            // save as instance var to not fetch on every render from local storage
            this.userId = await getLocalUserId()
        }

        return this.userId
    }

    private getUserSettings = async () => {
        fetch(`${SettingsFullpage.API_ENDPOINT}/${await this.getUserId()}`)
            .then(res => res.json())
            .then(data => {
                if (data.res) {
                    this.setState({
                        hasAcceptedDataPrivacy: data.res.hasAcceptedDataPrivacy,
                        email: data.res.email,
                        validEmail: true,
                    })
                    this.setLoading(LoadingStatus.DONE)
                    console.log("SettingsFullpage:getUserSettings: Received user settings.")
                } else {
                    console.log("SettingsFullpage:getUserSettings: No user settings previously saved")
                    this.setLoading(LoadingStatus.DONE)
                }
            })

            .catch(e => {
                console.error(e)
                this.setLoading(LoadingStatus.ERROR)
            })
    }

    private postUserSettings = () => {
        this.setState({isSavingSettings: true}, async () => {

            try {
                const rawResp = await fetch(`${SettingsFullpage.API_ENDPOINT}/${await this.getUserId()}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        hasAcceptedDataPrivacy: this.state.hasAcceptedDataPrivacy,
                    }),
                })

                const res = await rawResp.json()

                // mark the email as created, --> "Accept" Button works now.
                markEmailAsCreated()

                this.setState({isSavingSettings: false})
                console.log("SettingsFullpage:postUserSettings: Tried to save userSettings -> " + JSON.stringify(res))
            } catch (e) {
                noInternetAvailable()
                console.error(e)
            }
        })
    }

    private emailValidation = (email: string) => {
        this.setState({email, validEmail: SettingsFullpage.EMAIL_REGEX.test(email)})
    }

    private isFormSubmittable = (): boolean => {
        return this.state.validEmail && this.state.hasAcceptedDataPrivacy
    }
}
