import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather } from '@expo/vector-icons';

import { validateInput } from '../utils/actions/formActions';

const SignInForm = props => {

    const inputChangedHandler = (inputId, inputValue) => {
        console.log(validateInput(inputId, inputValue))
    }

    return (
        <>
            <Input
                id="email"
                label="Email"
                icon="mail"
                iconPack={Feather}
                autoCapitalize="none"
                keyboardType="email-address"
                onInputChanged={inputChangedHandler} />

            <Input
                id="password"
                label="Hasło"
                icon="lock"
                iconPack={Feather}
                secureTextEntry
                onInputChanged={inputChangedHandler}
            />

            <SubmitButton
                title="Zaloguj się"
                onPress={() => console.log("Button pressed")}
                style={{ marginTop: 20 }}
                onInputChanged={inputChangedHandler} />
        </>
    )
};

export default SignInForm;