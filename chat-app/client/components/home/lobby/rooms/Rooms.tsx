import React, { useState } from 'react'
import Spinner from './spinner/spinner'
import Join from './join/join'
const rooms = [
    {name:'room1',id:'1'},
    {name:'room2',id:'2'},
    {name:'room3',id:'3'},
    {name:'room4',id:'4'},
    {name:'room5',id:'5'},
    {name:'room6',id:'6'},
]
const Rooms = () => {
    const [requested, setRequested] = useState(false)
    const joinHandler =(e) =>{
        console.log(e.currentTarget);
        
        setRequested(!requested)
    }
  return (
    <div className='p-4'>
        <span>Rooms to join:</span>
        <ul>
            {rooms.map(room => {
                return (
                    <li key={room.id} className='w-full flex justify-between my-2'>
                        <span>{room.name}</span>
                        <div className='text-sm'>
                        {requested?
                            <div onClick={(e)=>joinHandler(e)}
                                className='text-red-500 hover:text-red-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 mx-1 cursor-pointer flex flex-row' title='Cancel'>
                                <span className='mr-2 '>
                                    Cancel
                                </span>
                                <Spinner size='12px'/>
                            </div>
                        :
                        <Join id={room.id} joinHandler={(e) => joinHandler(e)}/>
                    }
                    </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Rooms