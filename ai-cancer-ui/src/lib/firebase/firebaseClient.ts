// import {
//     PUBLIC_FIREBASE_API_KEY,
//     PUBLIC_AUTH_DOMAIN,
//     PUBLIC_PROJECT_ID,
//     PUBLIC_STORAGE_BUCKET,
//     PUBLIC_MESSAGING_SENDER_ID,
//     PUBLIC_APP_ID,
//     PUBLIC_MEASUREMENT_ID
// } from '$env/static/public';
import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: PUBLIC_FIREBASE_API_KEY,
//     authDomain: PUBLIC_AUTH_DOMAIN,
//     projectId: PUBLIC_PROJECT_ID,
//     storageBucket: PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: PUBLIC_MESSAGING_SENDER_ID,
//     appId: PUBLIC_APP_ID,
//     measurementId: PUBLIC_MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCRArYuRx4hOIEntpd6sOj7PnwOzMG29A0",
    authDomain: "sdmay24-10.firebaseapp.com",
    projectId: "sdmay24-10",
    storageBucket: "sdmay24-10.appspot.com",
    messagingSenderId: "159889844134",
    appId: "1:159889844134:web:dc2cead53911eb2cb29167",
    measurementId: "G-BNBC245H2Z"
  };

let firebaseApp: FirebaseApp;

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
}

export const auth = getAuth(firebaseApp)
