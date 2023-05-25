import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ChatSettingScreen from './ChatSettingsScreen';

const ChatListScreen = props => {

    return <View style={styles.container}>
        <Text>Lista czatów</Text>

        <Button title='Ustawienia' onPress={() => props.navigation.navigate('Ustawienia')}></Button>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatListScreen;