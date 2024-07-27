// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA6O5JnZr_UqHOSp1rqdjH5JsaPy0LsnEI",
  authDomain: "web-kelas-165f0.firebaseapp.com",
  projectId: "web-kelas-165f0",
  storageBucket: "web-kelas-165f0.appspot.com",
  messagingSenderId: "9516000813",
  appId: "1:9516000813:web:a620dfe44c656e1a8e3aa4",
  measurementId: "G-Z21TNDZ94B",


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();