import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, SafeAreaView } from 'react-native';

import backgroundImage from '../assets/images/droplet.png';

const ChatScreen = props => {

    return (
        <SafeAreaView
            edges={['right', 'left', 'bottom']}
            style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

            </ImageBackground>

            <View style={styles.inputContainer}>
                <Button title='Obraz' />
                <TextInput />
                <Button title='Aparat' />
            </View>
        </SafeAreaView >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    backgroundImage: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
    }
})

export default ChatScreen;