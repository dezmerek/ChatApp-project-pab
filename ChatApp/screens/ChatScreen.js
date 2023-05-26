import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ChatScreen = props => {

    return <View style={styles.container}>
        <Text>Ekran czatu</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatScreen;