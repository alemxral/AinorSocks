// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5EJ9_jiwvpPmMOce4zaF4KIob7mpZNJE",
  authDomain: "ainorsocks.firebaseapp.com",
  projectId: "ainorsocks",
  storageBucket: "ainorsocks.appspot.com",
  messagingSenderId: "174698397490",
  appId: "1:174698397490:web:f625c435b07d7e3326e12b",
  measurementId: "G-0E2KVV4W4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);