// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjrBhmWmzjg0oJE_BQ40S6Q-StNCM66E",
  authDomain: "realtor-clone-react-8c9fe.firebaseapp.com",
  projectId: "realtor-clone-react-8c9fe",
  storageBucket: "realtor-clone-react-8c9fe.appspot.com",
  messagingSenderId: "431745944243",
  appId: "1:431745944243:web:3a97b3ba90fb63d069fec6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
