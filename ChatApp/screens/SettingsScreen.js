import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';

const SettingScreen = props => {

    return <PageContainer>
        <PageTitle text="Ustawienia" />
    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SettingScreen;