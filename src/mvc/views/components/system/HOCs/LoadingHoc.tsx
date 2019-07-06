import * as React from "react"

export enum LoadingStatus {
    LOADING = "loading",
    DONE = "done",
    ERROR = "error"
}
// tslint:disable-next-line:no-empty
export const LoadingContext: React.Context<(_:LoadingStatus)=>void> = React.createContext((_:LoadingStatus):void => {console.error("LoadingHoc: Calling default context!")})