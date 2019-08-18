export declare enum LogType {
    ERROR = "Error",
    WARN = "Warn",
    LOG = "Log",
    INFO = "Info",
    EVENT = "Event"
}
export declare const logEvent: (logType: LogType, event: string, params: any, error?: Error | undefined) => void;
export declare const setCurrentScreen: (screenName: string, screenClassOverride: string) => void;
export declare const setCurrentUserId: () => Promise<void>;
