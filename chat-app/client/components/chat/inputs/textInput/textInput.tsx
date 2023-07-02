import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TextInput = () => {
  const{inputText} = useSelector(state => state.appState)
  const dispatch = useDispatch()
  return (
    <div className='w-full flex flex-row'>
        <span role="textbox" dir='auto' id="message_input" contentEditable onChange={(e) => dispatch(e.target)} value={inputText}
            className="input_bg block bg-blue-500 w-full h-10 overflow-x-hidden overflow-y-auto " ></span>
        <button id="send_btn" className='w-10 bg-red-500' disabled>btn</button>
    </div>
  )
}

export default TextInput