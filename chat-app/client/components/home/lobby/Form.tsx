import React, { useRef, useState } from 'react'
import FileInput from './fileInput/fileInput'
import TextInput from './textInput/TextInput'
import Submit from './submit/Submit'
import { infoValitaor } from './infoValidator'
import Rooms from './rooms/Rooms'

// import {socketJoinHandler} from '../chat.js'

const Form: React.FC = () => {
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
      className='max-w-md relative flex flex-col my-2 mx-auto p-2 rounded-lg bg-white shadow-lg'>
        <FileInput/>
        <TextInput element={nameInput} id='username' name='username' value='maz' placeHolder='Name' />
        <Rooms/>
        {/* <TextInput element={roomInput} id='room' name='room' value='mychatrumonlyroomtotest' placeHolder='Room'/> */}
        {/* <Submit/> */}

      </form>      
  )
}
export default Form