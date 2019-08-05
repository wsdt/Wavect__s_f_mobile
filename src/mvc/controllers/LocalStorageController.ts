import AsyncStorage from "@react-native-community/async-storage"
import {logEvent, LogType} from "./LoggingController/LoggingController"

const TAG = "LocalStorageController"

// Local constants
const USER_ID = "user_id"
const EMAIL_MARKED = "email_marked"

// General functions
export const getLocalItem = async(key:string): Promise<string|null> => {
    let queriedValue: string | null = null
    try {
        queriedValue = await AsyncStorage.getItem(key)
    } catch (e) {
        logEvent(LogType.ERROR, `${TAG}:getLocalItem`, `Could not query item with key '${key}' from local storage.`)
    }
    return queriedValue
}

export const setLocalItem = async(key:string, val:string):Promise<void> => {
    try {
        await AsyncStorage.setItem(key, val)
    } catch (e) {
        logEvent(LogType.ERROR, `${TAG}:setLocalItem`, `Could not save item with key '${key}' and value '${val}'.`)
    }
}


const generateNewUserId = async (): Promise<string> => {
    const newUserId: string = Math.random()
        .toString(36)
        .substring(7)
    try {
        await AsyncStorage.setItem(USER_ID, newUserId)
    } catch (e) {
        logEvent(LogType.ERROR, `${TAG}:markEmailAsCreated`, e)
    }
    return newUserId
}

export const getLocalUserId = async (): Promise<string> => {
    const localUserId: string | null = await AsyncStorage.getItem(USER_ID)
    return localUserId === null ? generateNewUserId() : localUserId
}

export const doesLocalUserIDExist = async (): Promise<boolean> => {
    const localUserId: string | null = await AsyncStorage.getItem(USER_ID)
    return localUserId !== null
}

export const markEmailAsCreated = async (): Promise<boolean> => {
    try {
        await AsyncStorage.setItem(EMAIL_MARKED, "true")
        return true
    } catch (e) {
        logEvent(LogType.ERROR, `${TAG}:markEmailAsCreated`, e)
        return false
    }
}

export const getEmailMarked = async (): Promise<string | null> => {
    return AsyncStorage.getItem(EMAIL_MARKED)
}
