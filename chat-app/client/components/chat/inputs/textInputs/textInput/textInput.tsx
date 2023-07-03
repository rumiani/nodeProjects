import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputTextReducer } from '@/redux/appStateSlice'
const limit: number = +process.env.NEXT_PUBLIC_TEXT_LIMIT!
const TextInput = () => {
  const{inputText} = useSelector(state => state.appState)
  const dispatch = useDispatch()
    
  const dispatchHandler = (e) => {
    dispatch(inputTextReducer(e.target.innerText))
  }
  return (
      <div role="textbox" dir='auto' id="message_input"   contentEditable onInput={dispatchHandler}
          className={` text-lg outline-none break-all border-none p-1 pb-2 max-h-40 h-fit overflow-y-auto ${inputText.length > limit && 'text-gray-500'}
          ${inputText.length === 0 && 'before:content-["Message"] before:cursor-text'} before:text-gray-500`} >
      </div>        
  )
}
export default TextInput