// Modify this task list to ensure a specific method is run on app update
import { onAppUpdate } from '../CacheController/CacheController'

export interface IUpdateTask {
    onAppUpdate: (oldVersion: string, newVersion: string) => void | Promise<void>
}

export const ON_UPDATE_TASKS: IUpdateTask[] = [onAppUpdate]
