import * as React from 'react';
import { ILoadingContext } from '../../views/components/system/HOCs/LoadingHoc';
export declare const putCache: (key: string, val: any) => Promise<any>;
export declare const getCache: (key: string) => Promise<any>;
export declare const deleteCache: (key: string) => Promise<any>;
export declare const sneakCache: (key: string) => Promise<any>;
export declare const getAllFromCache: () => Promise<any>;
export declare const clearCache: () => void;
export declare const cachedFetch: (component: React.PureComponent<{}, {}, any>, cacheKey: string, loadingContext: ILoadingContext, reload: boolean, fetchFunction: () => void) => Promise<void>;
