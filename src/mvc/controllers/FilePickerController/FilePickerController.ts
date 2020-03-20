import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants';

export const getPermissionAsync = async (permission: Permissions.PermissionType) => {
    if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(permission);
        if (status !== 'granted') {
            alert('Sorry, we need permissions to make this work!');
        }
    }
};

export const takeImage = async () => {
    await getPermissionAsync(Permissions.CAMERA);

    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1
    });

    // @ts-ignore /Intelli-J Bug!
    return result.uri
};

export const pickImage = async () => {
    await getPermissionAsync(Permissions.CAMERA_ROLL);

     let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

    // @ts-ignore /Intelli-J Bug!
    return result.uri
};




