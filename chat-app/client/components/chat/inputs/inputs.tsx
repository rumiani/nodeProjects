import React from 'react'
import Bar from './bar/bar'
import Imoji from './imoji/Imoji'
import VoiceInput from './voiceInput/voiceInput'
import TextInput from './textInput/textInput'

const Inputs = () => {
  return (
    <div id="inputs" className='absolute bottom-0 pb-1 w-full flex flex-row justify-between my-0 mx-auto bg-white md:rounded-b-lg shadow-gray-100 shadow-inner md:w-3/4 h-10 max-w-xl rounded-t-lg'>
      <Imoji/>
      <TextInput/>
      <Bar/>
      <VoiceInput/>
    </div>
  )
}

export default Inputs