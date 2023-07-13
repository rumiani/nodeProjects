import React from 'react'

const Join = ({room,joinHandler, id}:{room:string,joinHandler:Function, id:string}) => {
  return (
    <div id={id} data-room={room} onClick={(e)=>joinHandler(e)} title='Join the room'
        className='text-green-500 hover:text-green-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 cursor-pointer'>
        Join
    </div>
  )
}

export default Join