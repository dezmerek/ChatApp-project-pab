import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

export const launchImagePicker = async () => {
    await checkMediaPermissions();

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
    });

    if (!result.cancelled) {
        console.log(result.uri);
    }
}

const checkMediaPermissions = async () => {
    if (Platform.OS !== 'web') {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            return Promise.reject("Potrzebujemy pozwolenia na dostęp do Twoich zdjęć");
        }
    }

    return Promise.resolve();
}