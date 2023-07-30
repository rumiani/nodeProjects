import React from 'react'
import Join from './join/join'
import Cancel from './cancel/cancel'
import { waitingIDReducer } from '@/redux/appStateSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const EachRoom = ({room,requested,joinHandler}) => {
    const{waitingID} = useSelector(state => state.appState)

    const dispatch = useDispatch()

    //   dispatch(waitingIDReducer(true))
    
  return (
      <li key={room.id} className='w-full flex justify-between my-2'>
            <span>{room.name}</span>
            <div className='text-sm'>
                {waitingID === room.id?
                    <Cancel id={room.id} cancelHandler={cancelHandler}/>
                :
                    <Join id={room.id} joinHandler={joinHandler}/>
                }
             </div>
        </li>
  )
}

export default EachRoom