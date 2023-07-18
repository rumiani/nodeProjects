import Spinner from '@/components/generalCom/spinner/spinner'
import React from 'react'

const Cancel = ({joinHandler, id}:{joinHandler:Function,room:string, id:string}) => {
  return (
    <div id={id} onClick={(e)=>joinHandler(e)} title='Cancel joining'
        className='text-red-500 hover:text-red-600 hover:bg-gray-300 bg-gray-100 transition-all duration-300 rounded-lg py-1 px-2 mx-1 cursor-pointer flex flex-row'>
        <span className='mr-2 '>
            Cancel
        </span>
        <Spinner size={12}/>
    </div>
  )
}

export default Cancel