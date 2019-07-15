import * as React from "react"

export interface ILoadingContext {
    setLoading: (_: LoadingStatus) => void
    setRefresh: (func: (cb: () => void) => void) => void
}

export enum LoadingStatus {
    LOADING = "loading",
    DONE = "done",
    ERROR = "error",
    NOT_AVAILABLE = "not_available",
}

const defaultVal: ILoadingContext = {
    setLoading: (_: LoadingStatus): void => {
        console.error("LoadingHoc: Calling default context!")
    },
    setRefresh: (_: (cb: () => void) => void): void => {
        console.error("LoadingHoc: Calling default context for setRefresh.")
    },
}

// tslint:disable-next-line:no-empty
export const LoadingHoc: React.Context<ILoadingContext> = React.createContext(defaultVal)
