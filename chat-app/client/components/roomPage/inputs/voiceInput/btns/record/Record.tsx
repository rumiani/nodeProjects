import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { recordingReducer } from '@/redux/appStateSlice'

const Record = () => {
  const dispatch = useDispatch()
  return (
    <>
        <Image onClick={()=>dispatch(recordingReducer())} width={24} height={24}  
          id="recordBtn" src="/assets/icons/mic.png" alt="mic"
          className='w-8 h-8 cursor-pointer' />
    </>
  )
}

export default Record