import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYuhfSTG0N9mPqTsDSoVjU-9B8nK5yZSY",
  authDomain: "blackwolf-c3f7c.firebaseapp.com",
  projectId: "blackwolf-c3f7c",
  storageBucket: "blackwolf-c3f7c.appspot.com",
  messagingSenderId: "143133622854",
  appId: "1:143133622854:web:733eb6933e646c891a8047",
  measurementId: "G-L8X8SSQQGH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword };
