import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import DataItem from '../components/DataItem';
import PageContainer from '../components/PageContainer';

const DataListScreen = props => {

    const storedUsers = useSelector(state => state.users.storedUsers);

    const { title, data, type, chatId } = props.route.params;

    useEffect(() => {
        props.navigation.setOptions({ headerTitle: title })
    }, [title])

    return <PageContainer>
        <FlatList
            data={data}
            keyExtractor={item => item}
            renderItem={(itemData) => {
                let key, onPress, image, title, subTitle, itemType;

                if (type === "users") {
                    const uid = itemData.item;
                    const currentUser = storedUsers[uid];

                    if (!currentUser) return;

                    key = uid;
                    image = currentUser.profilePicture;
                    title = `${currentUser.firstName} ${currentUser.lastName}`;
                    subTitle = currentUser.about;
                    itemType = "link";
                }

                return <DataItem
                    key={key}
                    onPress={onPress}
                    image={image}
                    title={title}
                    subTitle={subTitle}
                    type={itemType}
                />
            }}
        />

    </PageContainer>
};

export default DataListScreen;