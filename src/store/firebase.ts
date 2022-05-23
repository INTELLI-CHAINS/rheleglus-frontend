import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDG7JsoLMrXzDI-Lbal9W9HW2eSUyf45JE",
    authDomain: "rise-of-rhelegus.firebaseapp.com",
    projectId: "rise-of-rhelegus",
    storageBucket: "rise-of-rhelegus.appspot.com",
    messagingSenderId: "314444697676",
    appId: "1:314444697676:web:372e427b96b4baaf2c64e9",
    measurementId: "G-HHT7HV61YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);