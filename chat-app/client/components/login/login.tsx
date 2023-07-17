import React, { useEffect, useState } from 'react'
import Form from '../home/lobby/Form'
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
import jwt_decode from "jwt-decode";
import GoogleLoginComp from './googleLogin/googleLogin';
import { useSelector } from 'react-redux';
import Header from '../general/header/header';
import Footer from '../general/footer/footer';
 
function Login() {
  const{user} = useSelector(state => state.appState)
  
  const[showForm, setShowForm] = useState(false)
  setTimeout(() => {
    console.log('session:',user.session);
  }, 5000);
  useEffect(() => {
    if(user.session){
      console.log('user.session:',user.session);
      setShowForm(true)
      // const decoded:object = jwt_decode(session.credential);
      // console.log(decoded);
    }else{
      console.log('nothing here yet');
      
      setShowForm(false)  
    }
    
  },[user.session])

  return (
    <div className="relative max-w-5xl text-center animate-fallDown w-screen h-screen">
        <Header/>
          {user.loggedIn && <Form/>}
          <GoogleLoginComp/>
        <Footer/>
    </div>
  )
}

export default Login