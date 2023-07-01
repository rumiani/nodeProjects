import Image from 'next/image'
import React from 'react'
import Bar from './bar/bar'
import Imoji from './imoji/Imoji'
import VoiceInputs from './voiceInputs/VoiceInputs'

const Inputs = () => {
  return (
    <div id="inputs" className='absolute bottom-0 pb-1 w-full flex flex-row justify-between my-0 mx-auto bg-white md:rounded-b-lg shadow-gray-200 shadow-md md:w-3/4 h-10 max-w-xl bg-red-700 rounded-t-lg'>
      {/* <Imoji/> */}
      {/* <div role="textbox" dir='auto' id="message_input" className="input_bg bg-blue-200 w-full h-10 overflow-x-hidden overflow-y-auto" contentEditable></div>
      <button id="send_btn" disabled></button> */}
      
      {/* <Bar/> */}
       <VoiceInputs/>
    </div>
  )
}

export default Inputs