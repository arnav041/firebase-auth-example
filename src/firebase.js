import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDafASAq9M5aU6eUwPDu8mWl4oWVQUNb4c",
    authDomain: "fir-auth-d985a.firebaseapp.com",
    projectId: "fir-auth-d985a",
    storageBucket: "fir-auth-d985a.appspot.com",
    messagingSenderId: "25635256244",
    appId: "1:25635256244:web:893d85f5dd104271e1e4e1"
};

const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestore, 'users', `${userAuth.uid}`)
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }
    return userRef;
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export { auth, firestore, signInWithGoogle, createUserProfileDocument };