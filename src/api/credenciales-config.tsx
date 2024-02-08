import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyATt96k_TPQsXsUMrd6Yoo0Yzvk9h7qfxs",
  authDomain: "fir-web-dd221.firebaseapp.com",
  projectId: "fir-web-dd221",
  storageBucket: "fir-web-dd221.appspot.com",
  messagingSenderId: "844571196847",
  appId: "1:844571196847:web:7fe035fef622aed827835a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
