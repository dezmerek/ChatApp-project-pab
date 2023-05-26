import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Feather, FontAwesome} from '@expo/vector-icons'

import PageContainer from '../components/PageContainer';
import Input from '../components/Input';


const AuthScreen = props => {

    return <SafeAreaView style={{flex: 1}}>
        <PageContainer>
            <Input 
            label="Imię" 
            icon="user-o" 
            iconPack={FontAwesome}
            />
            <Input 
            label="Nazwisko" 
            icon="user-o" 
            iconPack={FontAwesome}
            />
            <Input 
            label="E-mail" 
            icon="mail" 
            iconPack={Feather}
            />
            <Input 
            label="Hasło" 
            icon="lock" 
            iconPack={Feather}
            />
        </PageContainer>
    </SafeAreaView>
};

const styles = StyleSheet.create({

})

export default AuthScreen;