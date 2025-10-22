// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1edQtIn8e7PHKPz8SOwZapRihFZd7lU8",
  authDomain: "learnova-16842.firebaseapp.com",
  projectId: "learnova-16842",
  storageBucket: "learnova-16842.firebasestorage.app",
  messagingSenderId: "401614793721",
  appId: "1:401614793721:web:753e240c3f1da46e732b28",
  measurementId: "G-G2GPNZWBVT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
