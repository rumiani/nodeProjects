import React from 'react'

const Spinner = ({size}:{size:number}) => {
    return (
    <span style={{width:`${size}px`,height:`${size}px`,}} 
      className={`border-2 animate-spin border-gray-300 border-t-blue-500 rounded-full`}>
    </span>
  )
}

export default Spinner