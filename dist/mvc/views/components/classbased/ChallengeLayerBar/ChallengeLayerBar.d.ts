import React from "react";
import { IChallengeLayerBarProps } from "./ChallengeLayerBar.props";
import { IChallengeLayerBarState } from "./ChallengeLayerBar.state";
declare class ChallengeLayerBar extends React.PureComponent<IChallengeLayerBarProps, IChallengeLayerBarState> {
    private static API_ENDPOINT;
    state: IChallengeLayerBarState;
    private lastChallengeIdSolved;
    render(): JSX.Element;
    componentDidMount(): void;
    private challengeAlreadySolved;
    private sendChallengeSolvedEmailToSponsor;
    private challengeSolved;
    private execBtnAccept;
    private retrieveChallengeSolved;
    private getCurrentChallengeSolvedId;
    private storeChallengeSolved;
}
declare const _default: React.ComponentType<Pick<IChallengeLayerBarProps, "headline" | "subline" | "setGrayscale" | "challengeId" | "expirationInMs" | "sponsorEmail" | "sponsorName"> & {
    onRef?: ((instance: ChallengeLayerBar | null) => void) | React.RefObject<ChallengeLayerBar> | null | undefined;
}>;
export default _default;
