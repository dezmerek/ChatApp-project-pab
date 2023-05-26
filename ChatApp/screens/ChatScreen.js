import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import backgroundImage from '../assets/images/droplet.png';
import colors from '../constants/colors';

const ChatScreen = props => {

    return (
        <SafeAreaView
            edges={['right', 'left', 'bottom']}
            style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

            </ImageBackground>

            <View style={styles.inputContainer}>
                <TouchableOpacity onPress={() => console.log("Pressed!")}>
                    <Feather name="plus" size={24} color={colors.blue} />
                </TouchableOpacity>

                <TextInput />

                <TouchableOpacity onPress={() => console.log("Pressed!")}>
                    <Feather name="camera" size={24} color={colors.blue} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    backgroundImage: {
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50
    }
})

export default ChatScreen;