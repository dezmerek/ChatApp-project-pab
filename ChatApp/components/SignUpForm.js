import React, { useCallback, useReducer } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authActions';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqH7N-SJEubNocS8G_Wx1iEubcg0yNrto",
    authDomain: "chatapp-4255d.firebaseapp.com",
    projectId: "chatapp-4255d",
    storageBucket: "chatapp-4255d.appspot.com",
    messagingSenderId: "667716197293",
    appId: "1:667716197293:web:bf08d4946c464d7b819f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initialState = {
    inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignUpForm = props => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);

    const authHandler = () => {
        signUp(
            formState.inputValues.firstName,
            formState.inputValues.lastName,
            formState.inputValues.email,
            formState.inputValues.password,
        );
    }

    return (
        <>
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
                errorText={formState.inputValidities["email"]}
            />

            <Input
                id="password"
                label="Hasło"
                icon="lock"
                autoCapitalize="none"
                secureTextEntry
                iconPack={Feather}
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities["password"]} />

            <SubmitButton
                title="Utwórz konto"
                onPress={authHandler}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid} />
        </>
    )
};

export default SignUpForm;