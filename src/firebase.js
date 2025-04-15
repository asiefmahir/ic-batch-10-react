// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAl9r9Sb_dDKsEHAtjEaPsPhoeThAITviE",
	authDomain: "our-simple-app.firebaseapp.com",
	projectId: "our-simple-app",
	storageBucket: "our-simple-app.firebasestorage.app",
	messagingSenderId: "244722207784",
	appId: "1:244722207784:web:e750b83983a40c699c391d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
