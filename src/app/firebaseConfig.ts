// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA15EixSLgKK4ymDVaSDyXqb-uv_KcEIHc",
  authDomain: "music-app-ba003.firebaseapp.com",
  databaseURL: "https://music-app-ba003-default-rtdb.firebaseio.com",
  projectId: "music-app-ba003",
  storageBucket: "music-app-ba003.firebasestorage.app",
  messagingSenderId: "188292569433",
  appId: "1:188292569433:web:7a9f2525717d47b7ac9448",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);
