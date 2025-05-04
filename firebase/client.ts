// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3NxDv9h3dXWnTlEw76OCQJfbG3uRzzVk",
  authDomain: "preppilot-92c7a.firebaseapp.com",
  projectId: "preppilot-92c7a",
  storageBucket: "preppilot-92c7a.firebasestorage.app",
  messagingSenderId: "200701041485",
  appId: "1:200701041485:web:e37e87ed9549779827b504",
  measurementId: "G-TP8H7G2LX1"
};

// Initialize Firebase
const app =!getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
