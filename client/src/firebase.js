// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCF3ryuONGlmt0S0qvB2LolZKDTddFnnE",
  authDomain: "blogify-mern-app-89623.firebaseapp.com",
  projectId: "blogify-mern-app-89623",
  storageBucket: "blogify-mern-app-89623.appspot.com", // ✅ fixed `.app` typo
  messagingSenderId: "315393097356",
  appId: "1:315393097356:web:461d136aecd98fbfe0c5a9",
  measurementId: "G-5EQLVWQESP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional; only if supported by browser)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});
