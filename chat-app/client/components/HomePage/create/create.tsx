import React from 'react'
import TextInput from '../textInput/TextInput'

const Create = () => {
  const createHandler = ()=>{
    console.log('createHandler');
    
  }
  return (
    <div onClick={()=>createHandler()} 
            className='flex flex-col w-full mt-4 mb-10 mx-auto text-center font-bold text-xl'>
            <span>
                Create a new room 
            </span>
            <span className='mx-auto my-2 bg-green-100 font-bold text-2xl inline-block w-8 h-8 rounded-lg cursor-pointer hover:bg-green-200 transition-all duration-300 text-center'
                title='Create'>
                +
            </span>
            {/* <TextInput element={roomInput} id='room' name='room' value='mychatrumonlyroomtotest' placeHolder='Room'/> */}

        </div>
  )
}

export default Create