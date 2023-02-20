import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDnnWkQ6eGaTame032TmeQ-l4yYKP3tgN4",
    authDomain: "todoapp-43e1b.firebaseapp.com",
    projectId: "todoapp-43e1b",
    storageBucket: "todoapp-43e1b.appspot.com",
    messagingSenderId: "50697767562",
    appId: "1:50697767562:web:a89679cfab8d94934ffb73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db,storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged}

// file > storage > get download url -> firestore db