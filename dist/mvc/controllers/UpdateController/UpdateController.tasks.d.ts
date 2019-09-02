export interface IUpdateTask {
    onAppUpdate: (oldVersion: string, newVersion: string) => void | Promise<void>
}
export declare const ON_UPDATE_TASKS: IUpdateTask[]
