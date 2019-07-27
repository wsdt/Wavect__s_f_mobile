import * as React from "react";
import { IChallengeFullpageProps } from "./ChallengeFullpage.props";
import { IChallengeFullpageState } from "./ChallengeFullpage.state";
declare class ChallengeFullpage extends React.PureComponent<IChallengeFullpageProps, IChallengeFullpageState> {
    state: IChallengeFullpageState;
    private loadingContext;
    render(): JSX.Element;
    private getChallengeView;
    private onLoad;
}
declare const _default: React.ComponentType<Pick<IChallengeFullpageProps, "challenge"> & {
    onRef?: ((instance: ChallengeFullpage | null) => void) | React.RefObject<ChallengeFullpage> | null | undefined;
}>;
export default _default;
