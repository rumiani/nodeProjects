import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage'
import React from 'react'

const Logout = ({logout}) => {
  return (
    <div className='text-center'>
        <button onClick={logout} className='text-blue-500 underline'>
            Log out
          </button>
    </div>
  )
}

export default Logout