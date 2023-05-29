import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';

const ChatListScreen = props => {

    const selectedUser = props.route?.params?.selectedUserId;

    const userData = useSelector(state => state.auth.userData);
    const userChats = useSelector(state => state.chats.chatsData);
    console.log(userChats);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Nowy czat"
                        iconName="create-outline"
                        onPress={() => props.navigation.navigate("NewChat")} />
                </HeaderButtons>
            }
        })
    }, []);

    useEffect(() => {

        if (!selectedUser) {
            return;
        }

        const chatUsers = [selectedUser, userData.userId];

        const navigationProps = {
            newChatData: { users: chatUsers }
        }

        props.navigation.navigate("ChatScreen", navigationProps);

    }, [selectedUser])

    return <View style={styles.container}>
        <Text>Lista czatów</Text>

        <Button title='Przejdź do ekranu czatu' onPress={() => props.navigation.navigate("ChatScreen")} />
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