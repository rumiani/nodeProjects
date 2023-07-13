import React, { useEffect, useState } from 'react'
import JoinHeader from './joinHeader/JoinHeader'
import Form from './lobby/Form'
import JoinFooter from './joinFooter/joinFooter'
import { GoogleLogin } from '@react-oauth/google';
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
import jwt_decode from "jwt-decode";
 
function Landing() {
  const[session, setSession] = useLocalStorage('userSession', null)
  const[showForm, setShowForm] = useState(false)

  useEffect(() => {
    if(session){
      // console.log(session);
      setShowForm(true)
      const decoded:object = jwt_decode(session.credential);
      // console.log(decoded);
    }else{
      setShowForm(false)  
    }
    
  },[session])

  return (
    <div className="max-w-5xl text-center animate-fallDown">
        <JoinHeader/>
        {showForm? 
          <>
            <Form/>
            <button onClick={() =>setSession(null)} className='text-blue-500 underline'>
              Sign out
            </button>
          </>
        :
          <GoogleLogin 
            onSuccess={credentialResponse => {                            
              setSession(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        }
        <JoinFooter/>
    </div>
  )
}

export default Landing