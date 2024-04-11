// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUmTdXZxROcGyhfRgk8UITlw3ujyZSts0",
  authDomain: "galaxy-b9fb8.firebaseapp.com",
  projectId: "galaxy-b9fb8",
  storageBucket: "galaxy-b9fb8.appspot.com",
  messagingSenderId: "663965638595",
  appId: "1:663965638595:web:312582e3a7853cc8b56776",
  measurementId: "G-VE2MBEKW58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);