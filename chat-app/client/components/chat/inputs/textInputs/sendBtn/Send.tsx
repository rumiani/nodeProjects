import Image from 'next/image'
import React from 'react'

const Send = () => {
    
  return (
    <button
    className=' w-10 h-10 flex justify-center align-middle'>
        <Image width={24} height={24} src='/assets/icons/send.png' alt='send btn' 
            className='h-8 pt-[2px]'/>
    </button>
  )
}

export default Send