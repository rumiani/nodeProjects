import React from 'react'
import GoogleLoginComp from './googleLogin/googleLogin';
import Header from '../generalCom/header/header';
import Footer from '../generalCom/footer/footer';

function LoginPage() {

  return (
    <div className="relative max-w-5xl text-center animate-fallDown w-screen h-screen">
        <Header/>
          <GoogleLoginComp/>
        <Footer/>
    </div>
  )
}

export default LoginPage