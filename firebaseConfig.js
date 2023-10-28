import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    authDomain: "fir-gradebook-3eb77.firebaseapp.com",
    projectId: "fir-gradebook-3eb77",
    storageBucket: "fir-gradebook-3eb77.appspot.com",
    messagingSenderId: "842705160127",
    appId: "1:842705160127:web:95352d018a8bddece8830a"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



