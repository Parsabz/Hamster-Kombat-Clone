import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyBAlptL_0RPJI_KY_GIjP2bcWkXsRSUap0",
  authDomain: "hahaha-1a5d5.firebaseapp.com",
  projectId: "hahaha-1a5d5",
  storageBucket: "hahaha-1a5d5.appspot.com",
  messagingSenderId: "888527913842",
  appId: "1:888527913842:web:c5d236d630ca80cf6713eb",
  measurementId: "G-FG1RE0RW20"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
