import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const NewChatScreen = props => {

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Zamknij"
                        onPress={() => props.navigation.goback()} />
                </HeaderButtons>
            },
            headerTitle: "Nowy czat"
        })
    }, []);

    return <View style={styles.container}>
        <Text>Nowy czat</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NewChatScreen;