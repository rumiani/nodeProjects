import React, { useEffect, useState } from 'react'
import JoinHeader from './joinHeader/JoinHeader'
import Form from './lobby/Form'
import JoinFooter from './joinFooter/joinFooter'
import { GoogleLogin } from '@react-oauth/google';
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';

function Landing() {
  const[session, setSession] = useLocalStorage('userSession', null)
  const[showForm, setShowForm] = useState(false)

  useEffect(() => {
    session?setShowForm(true):setShowForm(false)
  },[session])

  return (
    <div className="max-w-5xl text-center animate-fallDown">
        <JoinHeader/>
        {showForm? 
          <>
            <Form/>
            <button onClick={() =>setSession(null)} className='text-blue-500 underline'>Sign out</button>
          </>
        :
          <GoogleLogin
            onSuccess={credentialResponse => {              
              setSession(credentialResponse.clientId)
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