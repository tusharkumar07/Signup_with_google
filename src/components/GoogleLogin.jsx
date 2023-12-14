import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google.jsx';

function GoogleLogin() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <GoogleOAuthProvider clientId="442063572223-52shudcc2g396pdr79evv9n1b30qjku8.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default GoogleLogin;