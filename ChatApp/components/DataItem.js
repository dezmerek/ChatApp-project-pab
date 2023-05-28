import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const DataItem = props => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>


                <View style={styles.textContainer}>

                    <Text
                        numberOfLines={1}
                        style={styles.title}>
                        Tytuł
                    </Text>

                    <Text
                        numberOfLines={1}
                        style={styles.subtitle}>
                        Podtytuł
                    </Text>

                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

});

export default DataItem;