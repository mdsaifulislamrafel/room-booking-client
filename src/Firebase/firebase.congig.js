// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKMyf2uIZxS2XO76DfxAKz3NwCePAQl8k",
  authDomain: "hotel-room-656dd.firebaseapp.com",
  projectId: "hotel-room-656dd",
  storageBucket: "hotel-room-656dd.appspot.com",
  messagingSenderId: "342612535749",
  appId: "1:342612535749:web:f4c0186c674de2b17e03ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export default auth; 