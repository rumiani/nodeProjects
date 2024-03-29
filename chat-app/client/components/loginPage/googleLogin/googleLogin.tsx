import React, { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
import postData from './postUserInfo';
import { useDispatch } from 'react-redux';
import { userLoggedInReducer } from '@/redux/appStateSlice';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/router';

const GoogleLoginComp = () => {
  //   const decoded:object = jwt_decode(session.credential)
    const[session, setSession] = useLocalStorage('userSession', null)
    const{user} = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(()=>{  
      if(session){
        router.push('/')
      }
      // postData(process.env.NEXT_PUBLIC_SERVER_URL, session)
      // .then( (res)=>{
      //   const resJson = res        
        
      //     // console.log('Data was sent and here is the result:', resJson.msg)
      //   })
      //   .catch( err => console.log(err))
},[user, dispatch, session, router])

  return (
    <div className='w-fit mx-auto m-4'>
      <GoogleLogin
            onSuccess={credentialResponse => {                            
              setSession(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
        />
    </div>
  )
}

export default GoogleLoginComp