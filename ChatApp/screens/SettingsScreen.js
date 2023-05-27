import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';

const initialState = {
    inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        about: "",
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        about: false,
    },
    formIsValid: false
}

const SettingsScreen = props => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);

    return <PageContainer>
        <PageTitle text="Ustawienia" />

        <Input
            id="firstName"
            label="Imie"
            icon="user-o"
            iconPack={FontAwesome}
            onInputChanged={inputChangedHandler}
            autoCapitalize="none"
            errorText={formState.inputValidities["firstName"]} />

        <Input
            id="lastName"
            label="Nazwisko"
            icon="user-o"
            iconPack={FontAwesome}
            onInputChanged={inputChangedHandler}
            autoCapitalize="none"
            errorText={formState.inputValidities["lastName"]} />

        <Input
            id="email"
            label="Email"
            icon="mail"
            iconPack={Feather}
            onInputChanged={inputChangedHandler}
            keyboardType="email-address"
            autoCapitalize="none"
            errorText={formState.inputValidities["email"]} />

        <Input
            id="about"
            label="O mnie"
            icon="user-o"
            iconPack={FontAwesome}
            onInputChanged={inputChangedHandler}
            autoCapitalize="none"
            errorText={formState.inputValidities["about"]} />
    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SettingsScreen;