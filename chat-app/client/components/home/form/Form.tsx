import React from 'react'
import FileInput from './fileInput/fileInput'
import TextInput from './textInput/TextInput'
import Submit from './submit/Submit'
// import {socketJoinHandler} from '../chat.js'

function Form() {
  // const joinForm = document.getElementById('join_form')
  // const nameInput = document.getElementById('username')
  // const roomInput = document.getElementById('room')
  // const nameInputError = document.querySelector('.name_input_error')
  // const roomInputError = document.querySelector('.room_input_error')
  // const joinPreviewAvatar = document.getElementById("join_preview_avatar")
  // joinForm.onsubmit = ()=>{
  //     console.log('s');
  //     if(infoController(nameInput.value)){
  //         nameInputError.style.visibility = 'visible';
  //         nameInputError.innerText = infoController(nameInput.value)
  //         return false
  //     }
  //     if(infoController(roomInput.value)){
  //         roomInputError.style.visibility = 'visible';
  //         roomInputError.innerText = infoController(roomInput.value)
  //         return false
  //     }
  //     else{
  //         console.log('form submit');
  //         // socketJoinHandler({username: nameInput, room: roomInput})
  //         return true
  //     }
  // }
  

  
  return (
      <form id="join_form" method="post" action="./chat" encType="multipart/form-data" 
      className='max-w-md relative flex flex-col my-12 mx-auto p-4 rounded-lg bg-white shadow-lg'>
        <TextInput id='username' name='username' value='maz' placeHolder='Name' />
        <TextInput id='room' name='room' value='mychatrumonlyroomtotest' placeHolder='Room'/>
        <FileInput/>
        <Submit/>
      </form>      
  )
}

export default Form
