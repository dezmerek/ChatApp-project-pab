import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import ProfileImage from '../components/ProfileImage';
import colors from '../constants/colors';
import { getUserChats } from '../utils/actions/userActions';

const ContactScreen = props => {
    const storedUsers = useSelector(state => state.users.storedUsers);
    const currentUser = storedUsers[props.route.params.uid];

    const storedChats = useSelector(state => state.chats.chatsData);
    const [commonChats, setCommonChats] = useState([]);
    console.log(commonChats);
    useEffect(() => {

        const getCommonUserChats = async () => {
            const currentUserChats = await getUserChats(currentUser.userId);
            setCommonChats(
                Object.values(currentUserChats).filter(cid => storedChats[cid] && storedChats[cid].isGroupChat)
            )
        }

        getCommonUserChats();

    }, [])

    return <PageContainer>
        <View style={styles.topContainer}>
            <ProfileImage
                uri={currentUser.profilePicture}
                size={80}
                style={{ marginBottom: 20 }}
            />

            <PageTitle text={`${currentUser.firstName} ${currentUser.lastName}`} />
            {
                currentUser.about &&
                <Text style={styles.about} numberOfLines={2}>{currentUser.about}</Text>
            }
        </View>
    </PageContainer>
}

const styles = StyleSheet.create({
    topContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    about: {
        fontFamily: 'medium',
        fontSize: 16,
        letterSpacing: 0.3,
        color: colors.grey
    }
});

export default ContactScreen;