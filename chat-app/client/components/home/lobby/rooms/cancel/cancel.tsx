import React from 'react'
import Spinner from '../spinner/spinner'

const Cancel = ({joinHandler, room, id}:{joinHandler:Function,room:string, id:string}) => {
  return (
    <div id={id} data-room={room} onClick={(e)=>joinHandler(e)}
        className='text-red-500 hover:text-red-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 mx-1 cursor-pointer flex flex-row' title='Cancel'>
        <span className='mr-2 '>
            Cancel
        </span>
        <Spinner size='12px'/>
    </div>
  )
}

export default Cancel