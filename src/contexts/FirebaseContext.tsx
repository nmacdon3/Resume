import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { ReactNode } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyBhCceLOrVjvS6DJsY7rU0sbscU3FYqm3Y',
  authDomain: 'resume-53741.firebaseapp.com',
  projectId: 'resume-53741',
  storageBucket: 'resume-53741.appspot.com',
  messagingSenderId: '624958875679',
  appId: '1:624958875679:web:7d6ccaf4e55c5597a64d2a',
  measurementId: 'G-12M9EVHWWY'
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const FirebaseContext = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
