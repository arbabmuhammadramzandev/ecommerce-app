import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOFkz2J1vtmGve_dRUW5rel9p_OlMWE6U",
  authDomain: "ecommerce-application-b5c79.firebaseapp.com",
  projectId: "ecommerce-application-b5c79",
  storageBucket: "ecommerce-application-b5c79.appspot.com",
  messagingSenderId: "245402139206",
  appId: "1:245402139206:web:8bbc548a606bd03074e847",
  measurementId: "G-SLN9NHKCQ2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logOut = () => signOut(auth);
export {onAuthStateChanged};

export default app;