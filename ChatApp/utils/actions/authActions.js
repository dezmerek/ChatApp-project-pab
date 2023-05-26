import { getFirebaseApp } from '../firebaseHelper';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const signUp = async (firstName, lastName, email, password) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(result);
    } catch (error) {
        const errorCode = error.code;

        let message = "Coś poszło nie tak.";

        if (errorCode === "auth/email-already-in-use") {
            message = "Ten email jest już w użyciu";
        }

        throw new Error(message);
    }
}