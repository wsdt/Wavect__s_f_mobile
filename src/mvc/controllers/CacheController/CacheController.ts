import AsyncStorage from "@react-native-community/async-storage"
import * as React from "react"
// @ts-ignore
import {Cache} from "react-native-cache"
import {disableCache} from "../../../globalConfiguration/globalConfig"
import {ILoadingContext, LoadingStatus} from "../../views/components/system/HOCs/LoadingHoc"
import {logEvent, LogType} from "../LoggingController/LoggingController"

const TAG = "CacheController"

const cache = new Cache({
    backend: AsyncStorage,
    namespace: "wavect_cache",
    policy: {
        maxEntries: 5,
    },
})

export const putCache = (key: string, val: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        cache.setItem(key, val, (err: any) => {
            if (err) {
                logEvent(LogType.ERROR, `${TAG}:putCache`, `Cannot push element in cache -> '${key}':'${val}', err below: \n${JSON.stringify(err)}`)
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}

export const getCache = (key: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        cache.getItem(key, (err: any, val: any) => {
            if (err) {
                console.error(`${TAG}:getCache: Cannot get element with key -> '${key}', err below: \n${JSON.stringify(err)}`)
                reject(err)
            } else {
                resolve(val)
            }
        })
    })
}

export const deleteCache = (key: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        cache.removeItem(key, (err: any) => {
            if (err) {
                console.error(`${TAG}:deleteCache: Cannot delete element with key -> '${key}', err below: \n${JSON.stringify(err)}`)
                reject(err)
            }
            resolve(true)
        })
    })
}

export const sneakCache = (key: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        cache.peekItem(key, (err: any, val: any) => {
            if (err) {
                console.error(`${TAG}:sneakCache: Cannot get element with key -> '${key}', err below: \n${JSON.stringify(err)}`)
                reject(err)
            } else {
                resolve(val)
            }
        })
    })
}

export const getAllFromCache = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        cache.getAll((err: any, entries: any) => {
            if (err) {
                console.error(`${TAG}:getAllFromCache: Cannot read cache, err below: \n${JSON.stringify(err)}`)
                reject(err)
            } else {
                resolve(entries)
            }
        })
    })
}

export const clearCache = (): Promise<any> => {
    return new Promise<boolean>((resolve, reject) => {
        cache.clearAll((err: any) => {
            if (err) {
                console.error(`${TAG}:clearCache: Could not clear cache, err below: \n${JSON.stringify(err)}`)
                return reject(err)
            } else {
                console.log(`${TAG}:clearCache: Cleared cache successfully.`)
                resolve(true)
            }
        })
    })
}

/** Wrapper function to fetch data or use the cached version accordingly. */
export const cachedFetch = async (
    component: React.PureComponent,
    cacheKey: string,
    loadingContext: ILoadingContext,
    reload: boolean,
    fetchFunction: () => void
) => {
    // if user reloads
    if (reload || disableCache) {
        fetchFunction()
    } else {
        const cachedData = await getCache(cacheKey)
        if (cachedData) {
            console.log(`${TAG}:cachedFetch: Loading from cache`)
            component.setState(cachedData) // TODO: might cause problems in future if also non-cacheable state is in state (avoid overriding, ...)
            loadingContext.setLoading(LoadingStatus.DONE)
        } else {
            fetchFunction()
        }
    }
}
