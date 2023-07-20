import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwCERYkiAIg550uzpOWr7XuPYHA8Sj52I",
  authDomain: "floridade.firebaseapp.com",
  projectId: "floridade",
  storageBucket: "floridade.appspot.com",
  messagingSenderId: "800715401570",
  appId: "1:800715401570:web:8ad663a3b4c05e153e643b",
  databaseURL: "https://floridade-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
