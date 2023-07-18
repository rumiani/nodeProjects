import React, { useState } from 'react'
import EachRoom from './eachRoom/eachRoom'
const rooms = [
    {name:'room1',id:'1'},
    {name:'room2',id:'2'},
    {name:'room3',id:'3'},
    {name:'room4',id:'4'},
    {name:'room5',id:'5'},
    {name:'room6',id:'6'},
]
const Rooms = () => {
    const joinHandler = (id)=>{
        console.log('join',id);
    }
    // const [requestedID, setRequestedID] = useState(false)
    // const joinHandler =(e) =>{
    //     console.log(e.currentTarget);
        
    //     setRequestedID(!requested)
    // }
    // const joinHandler = (e,id) => {
    //     if (requestedID === index) {
    //         console.log('request to room with ID:' + e.currentTarget.dataset.room + ' was canceled. :(');

    //         setRequestedID(null); // Reset if clicked again
    //     } else {
    //         console.log('request to room with ID:' + clickedIndex + ' was canceled. :(');
    //         console.log('request to room with ID:' + e.currentTarget.dataset.room);
    //         setRequestedID(index);
    //     }
    // };
  return (
    <div className='p-4 text-center'>
        <span className='my-2'>{rooms.length} rooms to join:</span>
        <ul className='overflow-scroll h-64'>
            {rooms.map((room, index:string) => {
                return (
                    <EachRoom key={room.id} room={room} joinHandler={joinHandler}/>
                )
            })}
        </ul>
    </div>
  )
}

export default Rooms