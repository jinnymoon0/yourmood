// src/lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, isSupported } from "firebase/messaging";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB3ITad6IYprc-8j5fpHnhjVRq0UFotdo",
  authDomain: "yourmood-e4e10.firebaseapp.com",
  projectId: "yourmood-e4e10",
  storageBucket: "yourmood-e4e10.firebasestorage.app",
  messagingSenderId: "895278921175",
  appId: "1:895278921175:web:21ec3a33d5b5d17ca44792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// prevent re-init during hot reloads
export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messagingPromise = isSupported().then(ok => ok ? getMessaging(app) : null);
