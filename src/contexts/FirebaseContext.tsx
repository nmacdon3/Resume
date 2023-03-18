import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { ReactNode } from 'react';

//Resume values are stored in firestore, with backups stored on disk (store-backup.ts).
//This isn't because I think static, user-facing strings should be stored in the db,
//but just to include some querying logic in this project to showcase how'd I'd typically
//go about it :) - Nathan

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
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
