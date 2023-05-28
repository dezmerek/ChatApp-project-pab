import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import userImage from '../assets/images/userImage.jpeg';
import colors from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImagePicker } from '../utils/imagePickerHelper';

const ProfileImage = props => {

    const pickImage = () => {
        launchImagePicker();
    }

    return (
        <TouchableOpacity onPress={pickImage}>
            <Image
                style={{ ...styles.image, ...{ width: props.size, height: props.size } }}
                source={userImage} />

            <View style={styles.editIconContainer}>
                <FontAwesome name="pencil" size={15} color="black" />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 50,
        borderColor: colors.grey,
        borderWidth: 1
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.lightGrey,
        borderRadius: 20,
        padding: 8,
    }
})

export default ProfileImage;