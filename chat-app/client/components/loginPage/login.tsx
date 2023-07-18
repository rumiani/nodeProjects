import React from 'react'
import jwt_decode from "jwt-decode";
import GoogleLoginComp from './googleLogin/googleLogin';
import Header from '../generalCom/header/header';
import Footer from '../generalCom/footer/footer';

function LoginPage() {
  // const decoded:object = jwt_decode(session.credential);
  return (
    <div className="relative max-w-5xl text-center animate-fallDown w-screen h-screen">
        <Header/>
          <GoogleLoginComp/>
        <Footer/>
    </div>
  )
}

export default LoginPage