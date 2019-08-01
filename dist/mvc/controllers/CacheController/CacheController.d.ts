import * as React from "react";
import { ILoadingContext } from "../../views/components/system/HOCs/LoadingHoc";
export declare const putCache: (key: string, val: any) => void;
export declare const getCache: (key: string, cb: (val: any) => void) => void;
export declare const deleteCache: (key: string) => void;
export declare const sneakCache: (key: string, cb: (val: any) => void) => void;
export declare const getAllFromCache: (cb: (val: any) => void) => void;
export declare const clearCache: () => void;
export declare const cachedFetch: (component: React.PureComponent<{}, {}, any>, cacheKey: string, loadingContext: ILoadingContext, reload: boolean, fetchFunction: () => void) => void;
