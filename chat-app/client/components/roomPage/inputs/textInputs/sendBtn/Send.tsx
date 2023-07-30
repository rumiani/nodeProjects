import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import sendMsgHandler from '../sendMsgHandler/sendMsgHandler';

const Send = () => {
  const{inputText,user,to} = useSelector(state => state.appState)

  return (
    <button onClick={() => sendMsgHandler({inputText,user,to})}
     className=' w-10 h-10 flex justify-center align-middle'>
        <Image width={24} height={24} src='/assets/icons/send.png' alt='send btn' 
            className='h-8 w-auto pt-[2px]'/>
    </button>
  )
}

export default Send