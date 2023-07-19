import React, { MouseEventHandler } from 'react'

const Logout = ({logoutHandler}:{logoutHandler:MouseEventHandler}) => {

  return (
        <button onClick={logoutHandler} className='text-blue-500 underline mx-auto'>
            Log out
        </button>
  )
}

export default Logout