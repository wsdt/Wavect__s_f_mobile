import AsyncStorage from "@react-native-community/async-storage"
import * as React from "react"
// @ts-ignore
import {Cache} from "react-native-cache"
import {ILoadingContext, LoadingStatus} from "../../views/components/system/HOCs/LoadingHoc"

const TAG = "CacheController"

const cache = new Cache({
    backend: AsyncStorage,
    namespace: "wavect_cache",
    policy: {
        maxEntries: 5,
    },
})

export const putCache = (key: string, val: any): void => {
    cache.setItem(key, val, (err: any) => {
        if (err) {
            console.error(`${TAG}:putCache: Cannot push element in cache -> '${key}':'${val}', err below: \n${JSON.stringify(err)}`)
        }
    })
}

export const getCache = (key: string, cb: (val: any) => void): void => {
    cache.getItem(key, (err: any, val: any) => {
        if (err) {
            console.error(`${TAG}:getCache: Cannot get element with key -> '${key}', err below: \n${JSON.stringify(err)}`)
        } else {
            cb(val)
        }
    })
}

export const deleteCache = (key: string): void => {
    cache.removeItem(key, (err: any) => {
        if (err) {
            console.error(`${TAG}:deleteCache: Cannot delete element with key -> '${key}', err below: \n${JSON.stringify(err)}`)
        }
    })
}

export const sneakCache = (key: string, cb: (val: any) => void): void => {
    cache.peekItem(key, (err: any, val: any) => {
        if (err) {
            console.error(`${TAG}:sneakCache: Cannot get element with key -> '${key}', err below: \n${JSON.stringify(err)}`)
        } else {
            cb(val)
        }
    })
}

export const getAllFromCache = (cb: (val: any) => void): void => {
    cache.getAll((err: any, entries: any) => {
        if (err) {
            console.error(`${TAG}:getAllFromCache: Cannot read cache, err below: \n${JSON.stringify(err)}`)
        } else {
            cb(entries)
        }
    })
}

export const clearCache = (): void => {
    cache.clearAll((err: any) => {
        if (err) {
            console.error(`${TAG}:clearCache: Could not clear cache, err below: \n${JSON.stringify(err)}`)
        } else {
            console.log(`${TAG}:clearCache: Cleared cache successfully.`)
        }
    })
}

/** Wrapper function to fetch data or use the cached version accordingly. */
export const cachedFetch = (component: React.PureComponent, cacheKey: string, loadingContext: ILoadingContext, reload: boolean, fetchFunction: () => void) => {
    // if user reloads
    if (reload) {
        fetchFunction()
    } else {
        getCache(cacheKey, async (cachedData: any) => {
            if (cachedData) {
                console.log(`${TAG}:cachedFetch: Loading from cache`)
                component.setState(cachedData) // TODO: might cause problems in future if also non-cacheable state is in state (avoid overriding, ...)
                loadingContext.setLoading(LoadingStatus.DONE)
            } else {
                fetchFunction()
            }
        })
    }
}