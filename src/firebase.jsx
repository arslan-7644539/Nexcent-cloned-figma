// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ5E3F0LxbM2y4o7OXv7if5m-MKwqAaHY",
  authDomain: "wechat-4af2d.firebaseapp.com",
  projectId: "wechat-4af2d",
  storageBucket: "wechat-4af2d.firebasestorage.app",
  messagingSenderId: "57382886572",
  appId: "1:57382886572:web:7c3939206535c47ca45309",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// -------------------------------------------
export const auth = getAuth(app);
export const fireDB = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider();

