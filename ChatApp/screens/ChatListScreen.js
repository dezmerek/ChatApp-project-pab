import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DataItem from '../components/DataItem';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import colors from '../constants/colors';

const ChatListScreen = props => {

    const selectedUser = props.route?.params?.selectedUserId;

    const userData = useSelector(state => state.auth.userData);
    const storedUsers = useSelector(state => state.users.storedUsers);
    const userChats = useSelector(state => {
        const chatsData = state.chats.chatsData;
        return Object.values(chatsData).sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    });

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

    }, [props.route?.params])

    return <PageContainer>

        <PageTitle text="Czaty" />

        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate("NewChat", { isGroupChat: true })} >
                <Text style={styles.newGroupText}>Nowa Grupa</Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={userChats}
            renderItem={(itemData) => {
                const chatData = itemData.item;
                const chatId = chatData.key;

                const otherUserId = chatData.users.find(uid => uid !== userData.userId);
                const otherUser = storedUsers[otherUserId];

                if (!otherUser) return;

                const title = `${otherUser.firstName} ${otherUser.lastName}`;
                const subTitle = chatData.latestMessageText || "Nowy czat"
                const image = otherUser.profilePicture;

                return <DataItem
                    title={title}
                    subTitle={subTitle}
                    image={image}
                    onPress={() => props.navigation.navigate("ChatScreen", { chatId })}
                />
            }}
        />
    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newGroupText: {
        color: colors.blue,
        fontSize: 17,
        marginBottom: 5
    }
})

export default ChatListScreen;