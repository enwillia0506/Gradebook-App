import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

import { getFirestore } from "firebase/firestore";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const db = app.firestore();

