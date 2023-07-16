import React from 'react'
import Spinner from '../spinner/spinner'

const Cancel = ({joinHandler, room, id}:{joinHandler:Function,room:string, id:string}) => {
  return (
    <div id={id} data-room={room} onClick={(e)=>joinHandler(e)} title='Cancel joining'
        className='text-red-500 hover:text-red-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 mx-1 cursor-pointer flex flex-row'>
        <span className='mr-2 '>
            Cancel
        </span>
        <Spinner/>
    </div>
  )
}

export default Cancel