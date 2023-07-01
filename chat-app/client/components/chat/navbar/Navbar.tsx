import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div id="nav" className='z-10 flex justify-between flex-row my-0 mx-auto bg-white md:rounded-b-lg shadow-gray-200 shadow-md md:w-3/4 h-10 w-full max-w-xl'>
      <Image className="show_users_icon  w-6 h-6 m-2" width={24} height={24} src="/assets/icons/users.png" title="Show users" alt="show users" />
      <Image className="hide_users_icon hidden w-6 h-6 m-2 cursor-pointer" width={24} height={24} src="/assets/icons/close.png" title="Hide users" alt="Hide users" />
      <Image className='location_icon w-6 h-6 m-2 cursor-pointer' width={24} height={24} src="/assets/icons/location.png" alt="Location" title="Location" />
    </div>
  )
}
export default Navbar