import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDafASAq9M5aU6eUwPDu8mWl4oWVQUNb4c",
    authDomain: "fir-auth-d985a.firebaseapp.com",
    projectId: "fir-auth-d985a",
    storageBucket: "fir-auth-d985a.appspot.com",
    messagingSenderId: "25635256244",
    appId: "1:25635256244:web:893d85f5dd104271e1e4e1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
