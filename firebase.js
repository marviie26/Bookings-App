
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAtfxtUxVMI_LGP1T5fFUNquFI5DT3qczc",
  authDomain: "bookings-app-4ca85.firebaseapp.com",
  projectId: "bookings-app-4ca85",
  storageBucket: "bookings-app-4ca85.appspot.com",
  messagingSenderId: "1031126796068",
  appId: "1:1031126796068:web:97e91334ef11403e0955b1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

export {auth,db}