import React, { useCallback, useReducer } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';

const initialState = {
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
        dispatchFormState({ inputId, validationResult: result })
    }, [dispatchFormState]);

    return (
        <>
            <Input
                id="firstName"
                label="Imie"
                icon="user-o"
                iconPack={FontAwesome}
                onInputChanged={inputChangedHandler}
                autoCapitalize="none" />

            <Input
                id="lastName"
                label="Nazwisko"
                icon="user-o"
                iconPack={FontAwesome}
                onInputChanged={inputChangedHandler}
                autoCapitalize="none" />

            <Input
                id="email"
                label="Email"
                icon="mail"
                iconPack={Feather}
                onInputChanged={inputChangedHandler}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Input
                id="password"
                label="Hasło"
                icon="lock"
                autoCapitalize="none"
                secureTextEntry
                iconPack={Feather}
                onInputChanged={inputChangedHandler} />

            <SubmitButton
                title="Utwórz konto"
                onPress={() => console.log("Button pressed")}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid} />
        </>
    )
};

export default SignUpForm;