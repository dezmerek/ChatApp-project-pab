import { getFirebaseApp } from "../firebaseHelper";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const signUp = async (firstName, lastName, email, password) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}