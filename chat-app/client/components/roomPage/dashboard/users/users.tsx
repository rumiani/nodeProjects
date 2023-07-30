import React, { useState } from 'react'
import UsersList from './UsersList/usersList'
const members = {
    users:[
        {name:'maziar1', src:'/assets/icons/avatar.png', id:1,permission:true,joined:true},
        {name:'maziar1', src:'/assets/icons/avatar.png', id:10,permission:true,joined:true},
        {name:'maziar1', src:'/assets/icons/avatar.png', id:11,permission:true,joined:true},
        {name:'maziar1', src:'/assets/icons/avatar.png', id:12,permission:true,joined:true},
        {name:'maziar1', src:'/assets/icons/avatar.png', id:13,permission:true,joined:true},
        {name:'maziar1', src:'/assets/icons/avatar.png', id:14,permission:true,joined:true},
        {name:'maziar1', src:'/assets/icons/avatar.png', id:15,permission:true,joined:true},
        {name:'maziar2', src:'/assets/icons/avatar.png', id:2,permission:true,joined:true},
        {name:'maziar3', src:'/assets/icons/avatar.png', id:3,permission:true,joined:true},
        {name:'maziar4', src:'/assets/icons/avatar.png', id:4,permission:true,joined:false},
        {name:'maziar5', src:'/assets/icons/avatar.png', id:5,permission:false,joined:false},
        {name:'maziar6', src:'/assets/icons/avatar.png', id:6,permission:true,joined:false},
        {name:'maziar7', src:'/assets/icons/avatar.png', id:7,permission:false,joined:false},
        {name:'maziar8', src:'/assets/icons/avatar.png', id:8,permission:true,joined:true},
        {name:'maziar9', src:'/assets/icons/avatar.png', id:9,permission:true,joined:true},
    ],
    online () {
        return this.users.filter( user => user.joined === true && user.permission === true)
    },
    waiting () {
        return this.users.filter( user => user.joined === false && user.permission === true)
    },
    blocked () {
        return this.users.filter( user => user.permission === false)
    }
}
const Users = () => {
    const[userStatus, setUserStatus] = useState('online')
    const userStatusHandler = (status:string) =>{
        setUserStatus(status)
    }
  return (
    <div className='flex flex-col bg-white p-8 h-full'>
            <div className='flex flex-row justify-around w-full'>
                <span onClick={()=> userStatusHandler('online')} 
                    className='cursor-pointer text-center w-40 rounded-t-full py-1'>
                    {members['online']().length > 0 && members['online']().length} <br/>
                    Online 
                </span>
                <span onClick={()=> userStatusHandler('waiting')}
                    className='cursor-pointer text-center w-40 rounded-t-full py-1'>
                    {members['waiting']().length > 0 && members['waiting']().length} <br/>
                    Waiting 
                </span>
                <span onClick={()=> userStatusHandler('blocked')}
                    className='cursor-pointer text-center w-40 rounded-t-full py-1'>
                    {members['blocked']().length > 0 && members['blocked']().length} <br/>
                    Blocked 
                </span>
            </div> 
            <div className={`w-1/3 h-1 relative bg-gray-500 transition-all duration-500 rounded-t-full 
                ${userStatus === 'online'? 'left-0':userStatus === 'waiting'?'left-1/3':'left-2/3'}`}>
            </div>
            <UsersList users={members[userStatus]()}/>
    </div>
  )
}

export default Users