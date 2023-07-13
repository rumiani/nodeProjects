import React from 'react'

const Create = ({createHandler}:{createHandler:Function}) => {
  return (
    <div onClick={()=>createHandler()} 
            className='w-full mt-4 font-bold text-xl'>
            <span>
                Create a new room 
            </span>
            <span className='bg-green-100 font-bold text-2xl inline-block w-8 h-8 mx-4 rounded-lg cursor-pointer hover:bg-green-200 transition-all duration-300'
                title='Create'>
                +
            </span>
        </div>
  )
}

export default Create