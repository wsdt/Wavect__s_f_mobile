export declare const getLocalItem: (key: string) => Promise<string | null>;
export declare const setLocalItem: (key: string, val: string) => Promise<void>;
export declare const getLocalUserId: () => Promise<string>;
export declare const doesLocalUserIDExist: () => Promise<boolean>;
export declare const markEmailAsCreated: () => Promise<boolean>;
export declare const getEmailMarked: () => Promise<string | null>;
