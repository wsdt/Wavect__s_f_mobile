import { PureComponent } from "react";
import { IFadeProps } from "./Fade.props";
import { IFadeState } from "./Fade.state";
export declare class Fade extends PureComponent<IFadeProps, IFadeState> {
    state: IFadeState;
    constructor(props: IFadeProps);
    render(): JSX.Element;
}
