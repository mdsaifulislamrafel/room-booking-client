// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_J-izpXCCwUUrn7O4wkBeFKFAqjzq5a0",
  authDomain: "houses-for-sale-2f2d6.firebaseapp.com",
  projectId: "houses-for-sale-2f2d6",
  storageBucket: "houses-for-sale-2f2d6.appspot.com",
  messagingSenderId: "159865606719",
  appId: "1:159865606719:web:690895c6df5fc45bf6de8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export default auth; 