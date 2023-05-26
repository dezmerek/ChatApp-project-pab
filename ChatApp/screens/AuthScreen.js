import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome} from '@expo/vector-icons'

import PageContainer from '../components/PageContainer';
import Input from '../components/Input';


const AuthScreen = props => {

    return <SafeAreaView style={{flex: 1}}>
        <PageContainer>
            <Input 
            label="Imię" 
            icon="user-o" 
            iconPack={FontAwesome}
            iconSize={20}/>
        </PageContainer>
    </SafeAreaView>
};

const styles = StyleSheet.create({

})

export default AuthScreen;