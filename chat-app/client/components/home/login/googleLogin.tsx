import React, { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
import postData from './postUserInfo';
import { useDispatch } from 'react-redux';
import { userLoggedInReducer } from '@/redux/appStateSlice';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";

const GoogleLoginComp = () => {
    const[session, setSession] = useLocalStorage('userSession', null)
    const{user} = useSelector(state => state.appState)

    const dispatch = useDispatch()

    useEffect(()=>{
      console.log(!!session);
      
      postData(process.env.NEXT_PUBLIC_SERVER_URL, session)
      .then( (res)=>{
        const resJson = res
        console.log('res',res);
        
        const decoded:object = jwt_decode(session.credential)
        dispatch(userLoggedInReducer(session))
          console.log('Data was sent and here is the result:', resJson.msg)
        })
        .catch( err => console.log(err))
},[session, dispatch])
  return (
    <div className='w-fit mx-auto m-4'>
      {!user.session? 
        <GoogleLogin
            onSuccess={credentialResponse => {                            
              setSession(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
        />:
        <button onClick={() =>setSession(null)} className='text-blue-500 underline'>
            Sign out
          </button>
      }
    </div>
  )
}

export default GoogleLoginComp