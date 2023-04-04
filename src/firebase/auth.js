

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBToAt1CZA0Y0k-jya2YahEHBoq8839HqI",
  authDomain: "furmik-yup.firebaseapp.com",
  projectId: "furmik-yup",
  storageBucket: "furmik-yup.appspot.com",
  messagingSenderId: "111746744203",
  appId: "1:111746744203:web:3cc4cdaf71a23b38aaf98e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

