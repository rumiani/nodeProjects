import Image from 'next/image'
import React from 'react'
import io from 'socket.io-client';

const Send = () => {
    const sendTextHandler = () =>{
      console.log('send');
      
    }
  return (
    <button onClick={sendTextHandler}
     className=' w-10 h-10 flex justify-center align-middle'>
        <Image width={24} height={24} src='/assets/icons/send.png' alt='send btn' 
            className='h-8 w-auto pt-[2px]'/>
    </button>
  )
}

export default Send