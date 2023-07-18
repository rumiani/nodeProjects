import React from 'react'

const Join = ({id,joinHandler}:{id:string,joinHandler:Function}) => {
  
  return (
    <div data-id={id} onClick={()=>joinHandler(id)}
        className='text-green-500 hover:text-green-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 cursor-pointer'>
            Join
    </div>
  )
}

export default Join