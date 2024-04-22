// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3dIRM4z_lUk3QOS6Z561NPZeGS98lnBg",
  authDomain: "hereditary-cancer-screener.firebaseapp.com",
  projectId: "hereditary-cancer-screener",
  storageBucket: "hereditary-cancer-screener.appspot.com",
  messagingSenderId: "102527094963",
  appId: "1:102527094963:web:7c726115f1872e1c11a0c6",
  measurementId: "G-1E67RER1RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
