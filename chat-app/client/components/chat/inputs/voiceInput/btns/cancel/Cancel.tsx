import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { recordingReducer } from '@/redux/appStateSlice'

const Cancel = () => {
  const dispatch = useDispatch()

  return (
    <>
        <Image onClick={()=>dispatch(recordingReducer())} width={24} height={24} id="removeVoice" src="/assets/icons/close.png" title="delete voice" alt="delete_voice" 
              className='mx-2 cursor-pointer'/>
    </>
  )
}

export default Cancel