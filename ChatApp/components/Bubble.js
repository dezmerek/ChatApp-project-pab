import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bubble = props => {
    const { text } = props;

    return (
        <View style={styles.wrapperStyle}>
            <View>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'regular',
        letterSpacing: 0.3
    }
})

export default Bubble;