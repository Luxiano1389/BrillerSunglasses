import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3ERLGqv-kobtrDhBehHduRY-9SC5rGoA",
  authDomain: "briller-sunglasses.firebaseapp.com",
  projectId: "briller-sunglasses",
  storageBucket: "briller-sunglasses.appspot.com",
  messagingSenderId: "16978590137",
  appId: "1:16978590137:web:1b86169977ceb1455a9e68"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


