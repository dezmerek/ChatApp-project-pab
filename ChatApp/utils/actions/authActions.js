import { getFirebaseApp } from '../firebaseHelper';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { child, getDatabase, ref, set } from 'firebase/database';

export const signUp = async (firstName, lastName, email, password) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const { uid } = result.user;

        const userData = await createUser(firstName, lastName, email, uid);

        console.log(userData);
    } catch (error) {
        console.log(error);
        const errorCode = error.code;

        let message = "Coś poszło nie tak.";

        if (errorCode === "auth/email-already-in-use") {
            message = "Ten email jest już w użyciu";
        }

        throw new Error(message);
    }
}

const createUser = async (firstName, lastName, email, userId) => {
    const firstLast = `${firstName} ${lastName}`.toLowerCase();
    const userData = {
        firstName,
        lastName,
        firstLast,
        email,
        userId,
        signUpDate: new Date().toISOString()
    };

    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${userId}`);
    await set(childRef, userData);
    return userData;
}