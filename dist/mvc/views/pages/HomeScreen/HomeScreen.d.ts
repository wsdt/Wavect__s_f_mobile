import * as React from 'react';
import { IHomeScreenState } from './HomeScreen.state';
export declare class HomeScreen extends React.PureComponent<any, IHomeScreenState> {
    state: IHomeScreenState;
    private loadingContext;
    private abortController;
    componentDidMount(): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
    private getChallengeComponent;
    private fetchChallenge;
}
