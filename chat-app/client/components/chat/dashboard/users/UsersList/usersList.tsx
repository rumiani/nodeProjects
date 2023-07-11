import { userPreviewReducer } from '@/redux/appStateSlice'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const UsersList = ({users}) => {
  const dispatch = useDispatch()
    
  const dispatchUserPreview = (user) => {
    dispatch(userPreviewReducer(user))
  }
  return (
    <div className='w-full h-96 mt-2 overflow-y-scroll break-words animate-fallDown shadow-lg pt-8 px-20'>
      <ul className='pl-4'>
        {users.map( (user , index) => {
          return (<li key={user.id} onClick={()=> dispatchUserPreview(user)}
                    className='flex flex-row justify-between h-fit p-1 my-2 mx-0 cursor-pointer w-full rounded-lg transition-all duration-300'>
                  <span className='self-center'>{index + 1} -  </span>
                  <Image className="w-6 h-6 m-2" width={24} height={24} src={user.src} alt={user.name} />
                      <span className='pt-3'>{user.name}</span>
                      <span className='text-green-500 self-center mx-4 grow text-center rounded-lg hover:bg-slate-100'>{user.permission && !user.joined && 'Accept'}</span>
                  </li>
                )
              })}
      </ul>
    </div>
  )
}
/*

#UsersList > ul > .selfInfo img{
  border: 2px green solid;
}
#UsersList > ul > .selfInfo span{
  font-weight: bold;
}
*/
export default UsersList