// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjUARyzq8mBQrpxGbMYyoGkRGbTs1P37g",
  authDomain: "without-warning.firebaseapp.com",
  projectId: "without-warning",
  storageBucket: "without-warning.appspot.com",
  messagingSenderId: "799723676845",
  appId: "1:799723676845:web:bcf2838f07ba75559e5224",
  measurementId: "G-MWG3B3SSP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);