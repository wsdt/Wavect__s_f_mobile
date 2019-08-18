import React from "react";
import { ISettingsFullpageState } from "./SettingsFullpage.state";
export declare class SettingsFullpage extends React.PureComponent<any, ISettingsFullpageState> {
    private static API_ENDPOINT;
    private static EMAIL_REGEX;
    state: ISettingsFullpageState;
    private userId;
    private loadingContext;
    private abortController;
    componentDidMount(): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
    private getSettingsView;
    private getUserId;
    private getUserSettings;
    private postUserSettings;
    private emailValidation;
    private isFormSubmittable;
}
