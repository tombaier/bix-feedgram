import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection (db, "users"), where("uid", "==", user.uid))
        const results = await getDocs(q);
        if (results.docs.length === 0) {
            return await addDoc (collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            })
        }
};

const logInWithEmailAndPassword = async (email : string, password : string) => {
    return await signInWithEmailAndPassword (auth, email, password)
};

const signUpWithEmailAndPassword = async (name : string, email : string, password :string) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return await addDoc(collection(db, "users"), {
        uid: user.uid,
        name, 
        authProvider: "local",
        email,
    })
};

const sendPasswordReset = async (email : string) => {
    return await sendPasswordResetEmail (auth, email)
};

const logout = () => {
    signOut(auth);
};

export { initializeApp, auth, db, signInWithGoogle, logInWithEmailAndPassword, signUpWithEmailAndPassword, sendPasswordReset, logout };