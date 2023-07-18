import { userPreviewReducer } from '@/redux/appStateSlice';
import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function UserPreview() {
  const{userPreview} = useSelector(state => state.appState)
  const[block, setBlock] = useState(false)
  const dispatch = useDispatch()

  const dispatchHandler = () => {  
    dispatch(userPreviewReducer())
  }
  const blockUserHandler = () => {    
    const confirmed = confirm('Are you sure you wanna block the user?')
    if(confirmed) setBlock(!block)
  }

  return (<>
            {userPreview &&
              <div className='md:w-3/4 w-full absolute mx-auto p-2 shadow-md h-full bg-white z-20 '>
                <span onClick={dispatchHandler}
                  className='cursor-pointer hover:bg-gray-200 rounded-lg py-1 px-2 transition-colors duration-300'>Back</span>
                <span className='block text-center font-bold'>{userPreview.name}</span>
                <Image className='w-64 h-64 rounded-full my-10 mx-auto' width={250} height={250} alt='userPreview image' src='/assets/icons/avatar.png'/>
                <button onClick={(e)=> blockUserHandler(e)}
                  className='text-red-500 font-bold text-xl hover:bg-gray-200  p-2 w-40 mx-auto block rounded-lg text-center cursor-pointer'>
                    {block?'Unblock user':'Block user'}
                </button>
              </div>
            }
          </>
  )
}

export default UserPreview