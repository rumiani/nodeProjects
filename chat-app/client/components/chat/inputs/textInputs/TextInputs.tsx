import React from 'react'
import TextInput from './textInput/textInput'
import Emoji from './emoji/emoji'
import { useSelector } from 'react-redux'
import Record from '../voiceInput/btns/record/Record'
import Send from './sendBtn/Send'
import Bar from './bar/bar'

const TextInputs = () => {
  const{inputText} = useSelector(state => state.appState)

  return (
    <div className='flex flex-col'>
      <div className='flex w-full'>
      <div className='w-10'>
        <Emoji/>
      </div>
      <div className='flex-grow'>
        <TextInput/>
      </div>
      <div>
        {inputText === '' ?  <Record /> : <Send/>}
      </div>
    </div>
      <Bar/>
    </div>
  )
}

export default TextInputs