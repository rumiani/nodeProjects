import Image from 'next/image'
import React from 'react'

const UsersList = ({users}) => {
  
  return (
    <div className='w-full h-96 mt-2 overflow-y-scroll break-words animate-fallDown shadow-lg pt-8 px-20'>
      <ol className='pl-4 list-decimal'>
        {users.map( (user , index) => {
          return (<li key={user.id} className='flex flex-row h-fit p-1 my-2 mx-0 cursor-pointer hover:bg-gray-200 w-full rounded-lg transition-all duration-300'>
                  <span className='self-center'>{index + 1} -  </span>
                  <Image className="avatar  w-6 h-6 m-2" width={24} height={24} src={user.src} title="Show users" alt={user.name} />
                      <span className='pt-3'>{user.name}</span>
                  </li>
                )
        })}
      </ol>
    </div>
  )
}
/*

#UsersList > ul > .selfInfo img{
  border: 2px green solid;
}
#UsersList > ul > .selfInfo span{
  font-weight: bold;
}
*/
export default UsersList