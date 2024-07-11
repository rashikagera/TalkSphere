// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUcRGM44y0B_SkLZjaeCQU4BQ6Ip56lRg",
  authDomain: "chatapp-513e3.firebaseapp.com",
  projectId: "chatapp-513e3",
  storageBucket: "chatapp-513e3.appspot.com",
  messagingSenderId: "166568508762",
  appId: "1:166568508762:web:22e26f5cb67d9a03700763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider() ;