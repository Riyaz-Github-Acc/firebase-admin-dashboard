// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "fir-admindashboard.firebaseapp.com",
    projectId: "fir-admindashboard",
    storageBucket: "fir-admindashboard.appspot.com",
    messagingSenderId: "11660400724",
    appId: "1:11660400724:web:6b4b8684c5db4cf09335c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
