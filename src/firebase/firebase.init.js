// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnkb5Lw1XrEpEIVqs9z2_oPkeOiKo6DJ8",
    authDomain: "home-hero-df6e5.firebaseapp.com",
    projectId: "home-hero-df6e5",
    storageBucket: "home-hero-df6e5.firebasestorage.app",
    messagingSenderId: "864449527765",
    appId: "1:864449527765:web:6b2b73aa3bf1e24baa475c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);