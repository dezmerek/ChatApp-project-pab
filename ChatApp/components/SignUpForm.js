import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { validate } from 'validate.js';

const SignUpForm = props => {

    const inputChangedHandler = (inputId, inputValue) => {
        if (inputId === "firstName" || inputId === "lastName") {

            const constraints = {
                presence: { allowEmpty: false }
            };

            if (inputValue !== "") {
                constraints.format = {
                    pattern: "[a-z]+",
                    flags: "i",
                    message: "value can only contain letters"
                }
            }

            console.log(validate({ [inputId]: inputValue }, { [inputId]: constraints }))
        }
        else if (inputId === "email") {

        }
        else if (inputId === "password") {

        }
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