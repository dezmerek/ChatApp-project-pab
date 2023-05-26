import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PageContainer from '../components/PageContainer';


const AuthScreen = props => {

    return <SafeAreaView style={{flex: 1}}>
        <PageContainer>
            <Text>Hello</Text>
        </PageContainer>
    </SafeAreaView>
};

const styles = StyleSheet.create({

})

export default AuthScreen;