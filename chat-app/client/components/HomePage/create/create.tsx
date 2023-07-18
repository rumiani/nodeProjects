import React from 'react'
import TextInput from '../textInput/TextInput'

const Create = ({createHandler}:{createHandler:Function}) => {
  return (
    <div onClick={()=>createHandler()} 
            className='w-full mt-4 mx-auto text-center font-bold text-xl'>
            <span>
                Create a new room 
            </span>
            <span className='bg-green-100 font-bold text-2xl inline-block w-8 h-8 mx-4 rounded-lg cursor-pointer hover:bg-green-200 transition-all duration-300 text-center'
                title='Create'>
                +
            </span>
            {/* <TextInput element={roomInput} id='room' name='room' value='mychatrumonlyroomtotest' placeHolder='Room'/> */}

        </div>
  )
}

export default Create