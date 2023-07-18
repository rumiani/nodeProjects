import React, { useState } from 'react'
import Join from './join/join'
import Cancel from './cancel/cancel'
const rooms = [
    {name:'room1',id:'1'},
    {name:'room2',id:'2'},
    {name:'room3',id:'3'},
    {name:'room4',id:'4'},
    {name:'room5',id:'5'},
    {name:'room6',id:'6'},
]
const Rooms = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const joinHandler = (e,index) => {
        if (clickedIndex === index) {
            console.log('request to room with ID:' + e.currentTarget.dataset.room + ' was canceled. :(');

            setClickedIndex(null); // Reset if clicked again
        } else {
            console.log('request to room with ID:' + clickedIndex + ' was canceled. :(');
            console.log('request to room with ID:' + e.currentTarget.dataset.room);
            setClickedIndex(index);
        }
    };
  return (
    <div className='p-4 overflow-scroll h-64'>
        <span>{rooms.length} rooms to join:</span>
        <ul>
            {rooms.map((room, index:string) => {
                return (
                    <li key={room.id} className='w-full flex justify-between my-2 shadow-sm p-2'>
                        <span title={room.name} className='cursor-default h-8 px-1 mr-4 w-full text-left overflow-x-auto '>{room.name}</span>
                        <div className='text-sm'>
                            {clickedIndex !== index ? 
                                <Join id={index} room={room.id} joinHandler={(e) => joinHandler(e,index)}/>
                            :
                                <Cancel id={index} room={room.id} joinHandler={(e) => joinHandler(e,index)}/>
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