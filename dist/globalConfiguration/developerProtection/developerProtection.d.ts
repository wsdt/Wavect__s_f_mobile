import { ControlFunctionType } from './CustomControlFunctions';
export declare const addCustomControlFunction: (controlFunctionType: ControlFunctionType, func: () => Error | null) => void;
export declare const watchConfiguration: () => void;
