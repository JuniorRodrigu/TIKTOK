
import {getFirestore} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDSyzfa_o0oJh4-iawFCKMKmmiZSZuiK0c",
  authDomain: "tiktok-c8067.firebaseapp.com",
  projectId: "tiktok-c8067",
  storageBucket: "tiktok-c8067.appspot.com",
  messagingSenderId: "880816881304",
  appId: "1:880816881304:web:b54f788e408b6459d55aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;