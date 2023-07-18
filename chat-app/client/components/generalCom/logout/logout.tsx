import React, { MouseEventHandler } from 'react'

const Logout = ({logout}:{logout:MouseEventHandler}) => {
  return (
    <div className='text-center'>
        <button onClick={logout} className='text-blue-500 underline'>
            Log out
          </button>
    </div>
  )
}

export default Logout