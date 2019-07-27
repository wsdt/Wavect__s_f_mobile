import * as React from "react";
import { IHomeScreenState } from "./HomeScreen.state";
export declare class HomeScreen extends React.Component<any, IHomeScreenState> {
    state: IHomeScreenState;
    private loadingContext;
    componentDidMount(): void;
    render(): JSX.Element;
    private getChallengeComponent;
    private fetchChallenge;
}
