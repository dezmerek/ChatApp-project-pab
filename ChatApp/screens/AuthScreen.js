import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthScreen = props => {

    return <View style={styles.container}>
        <Text>Auth Ustawienia</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AuthScreen;