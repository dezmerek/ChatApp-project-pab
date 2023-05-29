import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReplyTo = props => {
    const { text, user, onCancel } = props;
    const name = `${user.firstName} ${user.lastName}`;

    return <View style={styles.container}>
        <View style={styles.textContainer}>

            <Text numberOfLines={1} style={styles.name}>{name}</Text>
            <Text numberOfLines={1}>{text}</Text>

        </View>
    </View>
}

const styles = StyleSheet.create({

});

export default ReplyTo;