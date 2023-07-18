import React, { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
import jwt_decode from "jwt-decode";
import GoogleLoginComp from './googleLogin/googleLogin';
import { useSelector } from 'react-redux';
import Header from '../general/header/header';
import Footer from '../general/footer/footer';
 
function Login() {
  // const decoded:object = jwt_decode(session.credential);
  return (
    <div className="relative max-w-5xl text-center animate-fallDown w-screen h-screen">
        <Header/>
          <GoogleLoginComp/>
        <Footer/>
    </div>
  )
}

export default Login