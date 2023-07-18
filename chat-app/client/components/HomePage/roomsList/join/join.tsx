import React from 'react'

const Join = ({id,joinHandler}:{id:string,joinHandler:string}) => {
  return (
<<<<<<< HEAD:chat-app/client/components/HomePage/roomsList/join/join.tsx
    <div id={id} data-room={room} onClick={(e)=>joinHandler(e)} title='Join the room'
        className='text-green-500 hover:text-green-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 cursor-pointer'>
        Join
    </div>
=======
    <div data-id={id} onClick={(e)=>joinHandler(e)}
                            className='text-green-500 hover:text-green-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 cursor-pointer'>
                                Join
                        </div>
>>>>>>> parent of face046 (done with joining rooms initialization):chat-app/client/components/home/lobby/rooms/join/join.tsx
  )
}

export default Join