import * as Sharing from 'expo-sharing';
const TAG = 'ShareController'

export const shareMedia = async (headline: string, sponsorName: string, uri: string) => {
    if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
    }

    return await Sharing.shareAsync(uri);
}

