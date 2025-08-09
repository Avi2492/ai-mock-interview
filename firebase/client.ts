import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAQ6FtTw3hEQ7pM1E9Q7f5eDOrwWW3VvPs",
	authDomain: "inwise-fac65.firebaseapp.com",
	projectId: "inwise-fac65",
	storageBucket: "inwise-fac65.firebasestorage.app",
	messagingSenderId: "471881927261",
	appId: "1:471881927261:web:e99400fd432dd75ca55bb4",
	measurementId: "G-7E3CG3Q5M7",
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
