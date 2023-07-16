import React, { useEffect, useState } from 'react'
import JoinHeader from './joinHeader/JoinHeader'
import Form from './lobby/Form'
import JoinFooter from './joinFooter/joinFooter'
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
import jwt_decode from "jwt-decode";
import GoogleLoginComp from './login/googleLogin';
import { useSelector } from 'react-redux';
 
function Landing() {
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
        <JoinHeader/>
          {!!user.session && <Form/>}
          <GoogleLoginComp/>
        <JoinFooter/>
    </div>
  )
}

export default Landing