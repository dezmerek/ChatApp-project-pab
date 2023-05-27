// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDqH7N-SJEubNocS8G_Wx1iEubcg0yNrto",
        authDomain: "chatapp-4255d.firebaseapp.com",
        databaseURL: "https://chatapp-4255d-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "chatapp-4255d",
        storageBucket: "chatapp-4255d.appspot.com",
        messagingSenderId: "667716197293",
        appId: "1:667716197293:web:bf08d4946c464d7b819f24"
    };

    // Initialize Firebase
    return initializeApp(firebaseConfig);

}