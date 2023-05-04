import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYYAPru0RyryJqZMTHmyM8n1bOksWaXx4",
  authDomain: "cart-84d26.firebaseapp.com",
  projectId: "cart-84d26",
  storageBucket: "cart-84d26.appspot.com",
  messagingSenderId: "293044482016",
  appId: "1:293044482016:web:5419ff496342efe40cc585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);