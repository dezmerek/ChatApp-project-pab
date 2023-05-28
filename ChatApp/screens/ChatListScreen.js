import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const ChatListScreen = props => {

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Nowy czat"
                        iconName="create-outline"
                        onPress={() => { }} />
                </HeaderButtons>
            }
        })
    }, []);

    return <View style={styles.container}>
        <Text>Lista czatow</Text>

        <Button title='Przejdz do widoku czatu' onPress={() => props.navigation.navigate("ChatScreen")} />
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