import { GoogleLogin } from '@react-oauth/google';
import React from 'react'

const Google = () => {
    console.log(<GoogleLogin/>?1:2);
    
  return (
    <GoogleLogin
        onSuccess={credentialResponse => {
            console.log('aaaaaaa',credentialResponse);
        }}
        onError={() => {
            console.log('Login Failed');
        }}
    />
  )
}

export default Google
