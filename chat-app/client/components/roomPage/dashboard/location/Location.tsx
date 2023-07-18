import Image from 'next/image'
import React from 'react'

const Location = () => {
  return (
              <Image className='location_icon w-6 h-6 m-2 cursor-pointer' width={24} height={24} src="/assets/icons/location.png" alt="Location" title="Location" />
  )
}

export default Location