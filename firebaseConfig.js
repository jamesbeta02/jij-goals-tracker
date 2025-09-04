import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1bq8VmY4p7XTCaSefNGTMuYvFY834g8s",
  authDomain: "jij-goals-tracker.firebaseapp.com",
  projectId: "jij-goals-tracker",
  storageBucket: "jij-goals-tracker.firebasestorage.app",
  messagingSenderId: "975766458934",
  appId: "1:975766458934:web:bf6064c664c4b0a12dfe97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
