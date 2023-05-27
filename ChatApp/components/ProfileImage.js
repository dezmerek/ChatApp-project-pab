import React from 'react';
import { Image, Text, View } from 'react-native';

import userImage from '../assets/images/userImage.jpeg';

const ProfileImage = props => {


    return (
        <View>
            <Image
                source={userImage} />
        </View>
    )
};

export default ProfileImage; 