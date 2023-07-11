import Image from 'next/image'
import React from 'react'

const Navbar = ({showDashboardHandler, dashboard}) => {
    
  return (
    <div id="nav" className=' z-10 flex justify-between flex-row md:rounded-b-lg shadow-gray-200 shadow-md  h-10 w-full max-w-xl bg-white'>
      <span onClick={showDashboardHandler} className="w-6 h-6 m-2 cursor-pointer">
        {dashboard?
          <Image  width={24} height={24} src="/assets/icons/close.png" title="Hide users" alt="Hide users" />
          :<Image width={24} height={24} src="/assets/icons/users.png" title="Show users" alt="show users" />
        }
      </span>
      <span title='settings'
        className='text-gray-900 text-2xl  w-8 h-8 rounded-full cursor-pointer text-center self-center mx-2 transition-all duration-500'>
        &#8942;
      </span>
    </div>
  )
}

export default Navbar