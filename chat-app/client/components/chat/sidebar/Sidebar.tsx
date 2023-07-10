import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  const user = [
    {name:'maziar1', src:'/assets/icons/avatar.png', id:1},
    {name:'maziar2', src:'/assets/icons/avatar.png', id:2},
    {name:'maziar3', src:'/assets/icons/avatar.png', id:3},
    {name:'maziar4', src:'/assets/icons/avatar.png', id:4},
    {name:'maziar5', src:'/assets/icons/avatar.png', id:5},
  ]
  return (
    <div id="sidebar" className='shadow-gray-300 shadow-md h-full w-1/3 break-words overflow-y-auto animate-fallDown rounded-r-lg p-2 absolute top-10 left-0 hidden'>
    <span id="room">room: roomName</span>
    <h2>Users:</h2>
    <ul id="users_list" className='pl-4'>
      {user.map( user => {
        return (<li key={user.id} className='flex flex-row h-fit my-2 mx-0'>
                <Image className="avatar  w-6 h-6 m-2 cursor-pointer" width={24} height={24} src={user.src} title="Show users" alt={user.name} />
                    <span>{user.name}</span>
                </li>
              )
      })}
    </ul>
</div>
  )
}
/*

#sidebar > ul > .selfInfo img{
  border: 2px green solid;
}
#sidebar > ul > .selfInfo span{
  font-weight: bold;
}
*/
export default Sidebar