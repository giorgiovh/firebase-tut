import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// require('dotenv').config();
import 'dotenv/config.js';

console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "fir-tutorial-9a326.firebaseapp.com",
    projectId: "fir-tutorial-9a326",
    storageBucket: "fir-tutorial-9a326.appspot.com",
    messagingSenderId: "389177619879",
    appId: "1:389177619879:web:44e3220dd47b0f9895f282",
    measurementId: "G-REVEK8QTT3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
