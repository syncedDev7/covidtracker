// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "",
  // authDomain: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: ""
  apiKey: "AIzaSyB_Vms93bcq0agSyiwxMVx_uH230TGDnw4",
  authDomain: "covid-auth2.firebaseapp.com",
  projectId: "covid-auth2",
  storageBucket: "covid-auth2.appspot.com",
  messagingSenderId: "917078178310",
  appId: "1:917078178310:web:b1bd84090a8303499c2187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;