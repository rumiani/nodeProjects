import React, { useState } from 'react'
import EachRoom from './eachRoom/eachRoom'
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
    const createHandler = () =>{
        setClickedIndex(null)
        console.log('Creating a new room');
    }
  return (
    <div className='p-4'>
        <span>{rooms.length} rooms to join:</span>
        <ul className=' overflow-scroll h-64 p-4 shadow-xl rounded-lg'>
            {rooms.map((room, index:string) => {
                return (
                    <EachRoom room={room} />
                )
            })}
        </ul>
    </div>
  )
}

export default Rooms