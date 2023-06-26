// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthprovider} from 'firebase/Auth';
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDki0BVDGdoQJMv5D7PS2U0B7ht8XRgtps",
  authDomain: "blogproject-f5661.firebaseapp.com",
  projectId: "blogproject-f5661",
  storageBucket: "blogproject-f5661.appspot.com",
  messagingSenderId: "138297725440",
  appId: "1:138297725440:web:ed669de4266387acac7ee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export  const auth = getAuth(app);
export const provider = new GoogleAuthprovider();
