import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import backgroundImage from '../assets/images/droplet.png';
import colors from '../constants/colors';

const ChatScreen = props => {

    const [messageText, setMessageText] = useState("");

    const sendMessage = useCallback(() => {
        setMessageText("");
    }, [messageText]);

    return (
        <SafeAreaView
            edges={['right', 'left', 'bottom']}
            style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

            </ImageBackground>

            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.mediaButton}
                    onPress={() => console.log("Pressed!")}>
                    <Feather name="plus" size={24} color={colors.blue} />
                </TouchableOpacity>

                <TextInput
                    style={styles.textbox}
                    value={messageText}
                    onChangeText={text => setMessageText(text)}
                    onSubmitEditing={sendMessage} />

                {
                    messageText === "" &&
                    <TouchableOpacity
                        style={styles.mediaButton}
                        onPress={() => console.log("Pressed!")}>
                        <Feather name="camera" size={24} color={colors.blue} />
                    </TouchableOpacity>
                }

                {
                    messageText !== "" &&
                    <TouchableOpacity
                        style={{ ...styles.mediaButton, ...styles.sendButton }}
                        onPress={sendMessage}>
                        <Feather name="send" size={20} color={'white'} />
                    </TouchableOpacity>
                }
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
    },
    textbox: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.lightGrey,
        marginHorizontal: 15,
        paddingHorizontal: 12
    },
    mediaButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35
    },
    sendButton: {
        backgroundColor: colors.blue,
        borderRadius: 50,
        padding: 8
    }
})

export default ChatScreen;