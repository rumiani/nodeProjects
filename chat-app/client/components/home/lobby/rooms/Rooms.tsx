import React, { useState } from 'react'
import Join from './join/join'
import Cancel from './cancel/cancel'
const rooms = [
    {name:'Karaj',id:'0'},
    {name:'Tehran',id:'1'},
    {name:'Roomiani',id:'2'},
    {name:'Rasht',id:'3'},
    {name:'Boroojerd',id:'4'},
    {name:'Kermanshah',id:'5'},
    {name:'Zahedandddddddddddddddwwewerwrwrwrwrwrwr2131564897',id:'6'},
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