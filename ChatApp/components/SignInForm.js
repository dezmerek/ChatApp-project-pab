import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather } from '@expo/vector-icons';

const SignInForm = props => {

    return (
        <>
            <Input
                label="Email"
                icon="mail"
                iconPack={Feather} />

            <Input
                label="Hasło"
                icon="lock"
                iconPack={Feather} />

            <SubmitButton
                title="Zaloguj się"
                onPress={() => console.log("Button pressed")}
                style={{ marginTop: 20 }} />
        </>
    )
};

export default SignInForm;