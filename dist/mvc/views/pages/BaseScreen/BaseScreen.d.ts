import * as React from "react";
import { IBaseScreenState } from "./BaseScreen.state";
export declare class BaseScreen extends React.PureComponent<any, IBaseScreenState> {
    state: IBaseScreenState;
    componentDidMount(): void;
    render(): JSX.Element;
    private onRefresh;
    private getCenteredText;
    private getLoadingStatusComponent;
    private getDisplayProp;
}
