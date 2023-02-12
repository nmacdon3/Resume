import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { FirebaseContext } from './contexts/FirebaseContext';
import { QueryContext } from './contexts/QueryContext';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseContext>
      <QueryContext>
        <App />
      </QueryContext>
    </FirebaseContext>
  </React.StrictMode>
);
