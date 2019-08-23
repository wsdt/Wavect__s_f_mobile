import React from "react";
import { ISettingsFullpageState } from "./PersonalSettingsFullpage.state";
export declare class PersonalSettingsFullpage extends React.PureComponent<any, ISettingsFullpageState> {
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
declare const _default: import("react-navigation-props-mapper").TargetComponent<unknown>;
export default _default;
