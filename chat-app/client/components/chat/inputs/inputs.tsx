import React from 'react'
import VoiceInput from './voiceInput/voiceInput'
import { useSelector } from 'react-redux'
import TextInputs from './textInputs/TextInputs'

const Inputs = () => {
  const{recording} = useSelector(state => state.appState)
console.log(recording);

  return (
    <div id="inputs" className='relative pb-1 w-full my-0 mx-auto bg-white md:rounded-b-lg shadow-gray-100 shadow-inner md:w-3/4 max-w-xl rounded-t-lg p-1'>
        {recording? <VoiceInput/> : <TextInputs/>}
    </div>
  )
}

export default Inputs