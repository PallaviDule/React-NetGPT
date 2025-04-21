// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWDvD_SUqDwWhOSD0uWdqNAwcJLOqNxhc",
  authDomain: "react-netgpt.firebaseapp.com",
  projectId: "react-netgpt",
  storageBucket: "react-netgpt.firebasestorage.app",
  messagingSenderId: "953322145032",
  appId: "1:953322145032:web:1113f0b1312ddf97d898bd",
  measurementId: "G-KJF4M878C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const getFirebaseAuth = getAuth();
