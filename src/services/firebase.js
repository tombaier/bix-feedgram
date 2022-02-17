import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import 'firebase/firestore'
import { collection, query, getDocs, getFirestore, where, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWn1aIF7I7wnImwCpTp2sxlQCs2Dn7rao",
  authDomain: "feedgram-b6464.firebaseapp.com",
  projectId: "feedgram-b6464",
  storageBucket: "feedgram-b6464.appspot.com",
  messagingSenderId: "304555558802",
  appId: "1:304555558802:web:6bb966c6716cbbec8b634b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection (db, "users"), where("uid", "==", user.uid))
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc (collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword (auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signUpWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name, 
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail (auth, email);
        alert ("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {auth, db, signInWithGoogle, logInWithEmailAndPassword, signUpWithEmailAndPassword, sendPasswordReset, logout };