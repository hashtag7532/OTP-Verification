// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSFNeTxAYaFvxvikZHjzh3c3Tug24eq9I",
  authDomain: "otp-verification-65adc.firebaseapp.com",
  projectId: "otp-verification-65adc",
  storageBucket: "otp-verification-65adc.appspot.com",
  messagingSenderId: "851884574606",
  appId: "1:851884574606:web:7d5cea57703c5a1e16c6df",
  measurementId: "G-98JG4Q20W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 