export declare const getLocalUserId: () => Promise<string>;
export declare const doesLocalUserIDExist: () => Promise<boolean>;
export declare const markEmailAsCreated: () => Promise<void>;
export declare const getEmailMarked: () => Promise<string | null>;
