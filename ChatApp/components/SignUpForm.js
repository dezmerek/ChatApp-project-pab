import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';

const SignUpForm = props => {

    return (
        <>
            <Input
                label="Imie"
                icon="user-o"
                iconPack={FontAwesome} />

            <Input
                label="Nazwisko"
                icon="user-o"
                iconPack={FontAwesome} />

            <Input
                label="Email"
                icon="mail"
                iconPack={Feather} />

            <Input
                label="Hasło"
                icon="lock"
                iconPack={Feather} />

            <SubmitButton
                title="Utwórz konto"
                onPress={() => console.log("Button pressed")}
                style={{ marginTop: 20 }} />
        </>
    )
};

export default SignUpForm;