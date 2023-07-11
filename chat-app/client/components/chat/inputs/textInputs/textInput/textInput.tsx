import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputTextReducer } from '@/redux/appStateSlice'
import sendMsgHandler from '../sendMsgHandler/sendMsgHandler'

const limit: number = +process.env.NEXT_PUBLIC_TEXT_LIMIT!

const TextInput = () => {
  const{inputText, user,to} = useSelector(state => state.appState)
  const dispatch = useDispatch()
    
  const dispatchHandler = (e: any) => {
    dispatch(inputTextReducer(e.target.innerText.trim()))
  }
  const enterKeyHandler = (e:any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        sendMsgHandler({inputText, user,to})
    }
}
  return (
      <div  
        role="textbox" 
        dir='auto' 
        id="message_input" 
        contentEditable 
        onInput={dispatchHandler}
        onKeyDown={enterKeyHandler}
        className={` text-lg outline-none break-all border-none p-1 pb-2 max-h-40 h-fit overflow-y-auto 
          ${inputText.length > limit && 'text-gray-500'}
          ${inputText.length === 0 && 'before:content-["Message"] before:cursor-text before:absolute'} 
          before:text-gray-500`} 
      />
  )
}
export default TextInput