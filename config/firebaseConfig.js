// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from  "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "auranest-2ba21.firebaseapp.com",
  projectId: "auranest-2ba21",
  storageBucket: "auranest-2ba21.firebasestorage.app",
  messagingSenderId: "906934853778",
  appId: "1:906934853778:web:da63d4cb793bf689a8864b",
  measurementId: "G-1CHWRRTJM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)