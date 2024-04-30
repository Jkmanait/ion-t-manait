// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAA8nc8M35TkC_XAyXxFb-QeeQ7pfzHpB8",
    authDomain: "it35-manait.firebaseapp.com",
    projectId: "it35-manait",
    storageBucket: "it35-manait.appspot.com",
    messagingSenderId: "94507076383",
    appId: "1:94507076383:web:a03c3e67e632194f2c3e2a",
    measurementId: "G-QS9G7CBMB2"
  };

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}