import Link from 'next/link'
import React from 'react'

const NoutFound = () => {
  return (
    <div className='text-center my-10 mx-auto pt-20 w-80 h-80 shadow-gray-500 shadow-xl rounded-2xl'>
        <h1 className='text-red-600 font-bold'>Page not found.</h1>
        <Link href='/' className='bg-blue-400 rounded-3xl p-2 hover:text-white hover:bg-blue-600 my-10 mx-auto transition-colors duration-500 block w-40'>Homepage</Link>
    </div>
  )
}

export default NoutFound