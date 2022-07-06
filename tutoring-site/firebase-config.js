// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi6CGdNU5X2OruipS56iJqxvvztvDRSgo",
  authDomain: "website-d9767.firebaseapp.com",
  projectId: "website-d9767",
  storageBucket: "website-d9767.appspot.com",
  messagingSenderId: "702793260382",
  appId: "1:702793260382:web:12696d89587000c920c3cf",
  measurementId: "G-HP1NXMGGLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
