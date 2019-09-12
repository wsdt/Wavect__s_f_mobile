import * as React from 'react'
import { logEvent, LogType } from '../../../../controllers/LoggingController/LoggingController'

const TAG = 'LoadingHoc'

export interface ILoadingContext {
    setLoading: (_: LoadingStatus) => void
    setRefresh: (func: (cb: () => void) => void) => void
}

export enum LoadingStatus {
    LOADING = 'loading',
    PREPARING = 'preparing', // used to indicate that some specific tasks are running
    DONE = 'done',
    ERROR = 'error',
    NOT_AVAILABLE = 'not_available',
}

const defaultVal: ILoadingContext = {
    setLoading: (_: LoadingStatus): void => {
        logEvent(LogType.ERROR, `${TAG}:setLoading`, 'Calling default context!')
    },
    setRefresh: (_: (cb: () => void) => void): void => {
        logEvent(LogType.ERROR, `${TAG}:setRefresh`, 'Calling default context!')
    },
}

export const LoadingHoc: React.Context<ILoadingContext> = React.createContext(defaultVal)
