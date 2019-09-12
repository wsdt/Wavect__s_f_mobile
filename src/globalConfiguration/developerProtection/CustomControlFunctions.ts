export enum ControlFunctionType {
    RELEASE = 'release',
    DEBUG = 'debug',
    ALL = 'all',
}

export interface ICustomControlFunctions {
    [ControlFunctionType.ALL]: Array<() => Error | null>
    [ControlFunctionType.RELEASE]: Array<() => Error | null>
    [ControlFunctionType.DEBUG]: Array<() => Error | null>
}
