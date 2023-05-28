import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import userImage from '../assets/images/userImage.jpeg';
import colors from '../constants/colors';

const ProfileImage = props => {


    return (
        <View>
            <Image
                style={{ ...styles.image, ...{ width: props.size, height: props.size } }}
                source={userImage} />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 50,
        borderColor: colors.grey,
        borderWidth: 1
    }
})

export default ProfileImage;