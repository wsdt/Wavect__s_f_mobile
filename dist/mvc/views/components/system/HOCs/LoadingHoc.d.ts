import * as React from 'react';
export interface ILoadingContext {
    setLoading: (_: LoadingStatus) => void;
    setRefresh: (func: (cb: () => void) => void) => void;
}
export declare enum LoadingStatus {
    LOADING = "loading",
    PREPARING = "preparing",
    DONE = "done",
    ERROR = "error",
    NOT_AVAILABLE = "not_available"
}
export declare const LoadingHoc: React.Context<ILoadingContext>;
