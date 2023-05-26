import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';

const SignUpForm = props => {

    const inputChangedHandler = (inputId, inputValue) => {
        console.log("InputId: " + inputId)
        console.log("InputValue: " + inputValue)
    }

    return (
        <>
            <Input
                id="firstName"
                label="Imie"
                icon="user-o"
                iconPack={FontAwesome}
                onInputChanged={inputChangedHandler} />

            <Input
                id="lastName"
                label="Nazwisko"
                icon="user-o"
                iconPack={FontAwesome}
                onInputChanged={inputChangedHandler} />

            <Input
                id="email"
                label="Email"
                icon="mail"
                iconPack={Feather}
                onInputChanged={inputChangedHandler} />

            <Input
                id="password"
                label="Hasło"
                icon="lock"
                iconPack={Feather}
                onInputChanged={inputChangedHandler} />

            <SubmitButton
                title="Utwórz konto"
                onPress={() => console.log("Button pressed")}
                style={{ marginTop: 20 }} />
        </>
    )
};

export default SignUpForm;