import React from 'react'

const Spinner = ({size}:{size:string}) => {
  
    return (
    <span className={`border-2 animate-spin border-gray-300 border-t-blue-500 w-[${size}] h-[${size}] rounded-full self-center`}>
    </span>
  )
}

export default Spinner