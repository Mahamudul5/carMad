// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMGHyNsZPG3U6Uw_6teQc6Fbn0AMUPNKU",
    authDomain: "carmad-716ca.firebaseapp.com",
    projectId: "carmad-716ca",
    storageBucket: "carmad-716ca.appspot.com",
    messagingSenderId: "206570452168",
    appId: "1:206570452168:web:ae1342e75bda8ff7c5a1fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
