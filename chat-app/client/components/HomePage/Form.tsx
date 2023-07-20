import React, { useEffect, useRef, useState } from 'react'
import FileInput from './fileInput/fileInput'
import Submit from './lobby/submit/Submit'
import Rooms from './roomsList/Rooms'
import TextInput from './textInput/TextInput'
import { infoValitaor } from './infoValidator/infoValidator'
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage'
import jwt_decode from "jwt-decode";

// import {socketJoinHandler} from '../chat.js'

const Form: React.FC = () => {
  const[session, setSession] = useLocalStorage('userSession', null)
  const[userInfo, setUserInfo] = useState < {name:null|string, picture:null|string} > ({name:null, picture:null})

  useEffect(()=>{

    const decodedInfo:object = jwt_decode(session.credential);
    setUserInfo(decodedInfo)
    console.log(decodedInfo);
    
  },[session])




  const nameInput = useRef<HTMLInputElement | null>(null);
  const roomInput = useRef<HTMLInputElement | null>(null);


  const submitHandler = (e:any) =>{    
    e.preventDefault()
    if(nameInput.current && infoValitaor(nameInput.current.value)?.error){
      nameInput.current.focus()
      return false 
    } 
    if(roomInput.current && infoValitaor(roomInput.current.value)?.error){
      roomInput.current.focus()
      return false 
    } else{
      console.log('form submit');
      // socketJoinHandler({username: nameInput, room: roomInput})
      return true
      }
  }
  
  return (
      <form onSubmit={submitHandler} id="join_form" method="post"  encType="multipart/form-data" 
      className='max-w-md relative flex flex-col my-2 mx-auto p-2 rounded-lg '>
        welcome {userInfo && userInfo.given_name}
        <FileInput src={userInfo.picture}/>
        {/* <TextInput element={nameInput} id='username' name='username' value='maz' placeHolder='Name' /> */}
        {/* <Submit/> */}
      </form>      
  )
}
export default Form