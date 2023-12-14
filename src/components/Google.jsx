import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
const Google = () => {
    const navigate=useNavigate();

    const navigateUser=()=>{
        navigate('/');  
    }

    const navigateToSignup=()=>{
        navigate('/signup');
    }

    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              navigateUser();
            }}
            onError={() => {
              console.log('Login Failed');
              navigateToSignup()
            }}
          />
    )
}

export default Google;