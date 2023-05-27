import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useReducer, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import SubmitButton from '../components/SubmitButton';
import colors from '../constants/colors';
import { updateLoggedInUserData } from '../store/authSlice';
import { updateSignedInUserData, userLogout } from '../utils/actions/authActions';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';

const SettingsScreen = props => {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const userData = useSelector(state => state.auth.userData);
    console.log(userData);

    const initialState = {
        inputValues: {
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            email: userData.email || "",
            about: userData.about || "",
        },
        inputValidities: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            about: undefined,
        },
        formIsValid: false
    }

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);

    const saveHandler = async () => {
        const updatedValues = formState.inputValues;

        try {
            setIsLoading(true);
            await updateSignedInUserData(userData.userId, updatedValues);
            dispatch(updateLoggedInUserData({ newData: updatedValues }));

            setShowSuccessMessage(true);

            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 3000);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return <PageContainer>
        <PageTitle text="Ustawienia" />

        <Input
            id="firstName"
            label="Imie"
            icon="user-o"
            iconPack={FontAwesome}
            onInputChanged={inputChangedHandler}
            autoCapitalize="none"
            errorText={formState.inputValidities["firstName"]}
            initialValue={userData.firstName} />

        <Input
            id="lastName"
            label="Nazwisko"
            icon="user-o"
            iconPack={FontAwesome}
            onInputChanged={inputChangedHandler}
            autoCapitalize="none"
            errorText={formState.inputValidities["lastName"]}
            initialValue={userData.lastName} />

        <Input
            id="email"
            label="Email"
            icon="mail"
            iconPack={Feather}
            onInputChanged={inputChangedHandler}
            keyboardType="email-address"
            autoCapitalize="none"
            errorText={formState.inputValidities["email"]}
            initialValue={userData.email} />

        <Input
            id="about"
            label="O mnie"
            icon="user-o"
            iconPack={FontAwesome}
            onInputChanged={inputChangedHandler}
            autoCapitalize="none"
            errorText={formState.inputValidities["about"]}
            initialValue={userData.about} />

        <View style={{ marginTop: 20 }}>
            {
                showSuccessMessage && <Text>Zapisano zmiany!</Text>
            }

            {
                isLoading ?
                    <ActivityIndicator size={'small'} color={colors.primary} style={{ marginTop: 10 }} /> :
                    <SubmitButton
                        title="Zapisz"
                        onPress={saveHandler}
                        style={{ marginTop: 20 }}
                        disabled={!formState.formIsValid} />
            }
        </View>


        <SubmitButton
            title="Wyloguj się"
            onPress={() => dispatch(userLogout())}
            style={{ marginTop: 20 }}
            color={colors.red} />
    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SettingsScreen;