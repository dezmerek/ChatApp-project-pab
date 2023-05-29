import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Input from '../components/Input';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import ProfileImage from '../components/ProfileImage';

const ChatSettingsScreen = props => {

    const chatId = props.route.params.chatId;
    const chatData = useSelector(state => state.chats.chatsData[chatId]);
    const userData = useSelector(state => state.auth.userData);

    return <PageContainer>
        <PageTitle text="Chat Settings" />

        <ScrollView contentContainerStyle={styles.scrollView}>
            <ProfileImage
                showEditButton={true}
                size={80}
                chatId={chatId}
                userId={userData.userId}
                uri={chatData.profileImageUri}
            />

            <Input
                id="chatName"
                label="Chat name"
                autoCapitalize="none"
                initialValue={chatData.chatName}
                allowEmpty={false}
            />

        </ScrollView>
    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatSettingsScreen;