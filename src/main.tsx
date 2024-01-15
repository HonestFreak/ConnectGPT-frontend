import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId="499564251403-92dhihflmfe5aqcsu0ag2sjun9rde769.apps.googleusercontent.com">
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
