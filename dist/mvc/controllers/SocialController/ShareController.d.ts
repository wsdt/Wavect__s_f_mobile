import { ImagePickerResponse } from 'react-native-image-picker';
export declare const shareImage: (headline: string, sponsorName: string, res: ImagePickerResponse, cb?: ((wasShareSuccessful: boolean) => void) | undefined) => Promise<void>;
