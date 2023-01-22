import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';

import App from './App';
import './index.css';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBhCceLOrVjvS6DJsY7rU0sbscU3FYqm3Y',
  authDomain: 'resume-53741.firebaseapp.com',
  projectId: 'resume-53741',
  storageBucket: 'resume-53741.appspot.com',
  messagingSenderId: '624958875679',
  appId: '1:624958875679:web:7d6ccaf4e55c5597a64d2a',
  measurementId: 'G-12M9EVHWWY'
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
