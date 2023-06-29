import React, { useState } from 'react'

interface InputObj{
    id:string,
    value:string,
    name:string,
    placeHolder:string, 
    error_id:string,
}
function TextInput({id, value, name, placeHolder, error_id}:InputObj) {
  const[currentValue, setCurrentValue] = useState(value)
  const[errorText, setErrorText]:any = useState(null)

    const infoController = (e) =>{
      setCurrentValue(e.target.value)
      if(e.target.value.length < 3 || e.target.value.length > 25) return setErrorText('Input must be 3-20 characters')
      if(e.target.value.toLowerCase().includes('admin')) return setErrorText('Input must not include the word: "Admin".')
      else{
        setErrorText(null)
      }
  }

  return (
    <>
      <span className="text-red-500 w-fit relative top-10 right-2 text-lg">
        *
      </span>
      <input 
        className="border-none py-0 px-2 rounded-lg my-0 mx-2 h-10 overflow-y-auto bg-white shadow-lg transition-shadow duration-1000" 
        onChange={infoController}
        id={id} 
        name={name} 
        value={currentValue}
        placeholder={placeHolder}
        autoComplete="off" 
        required 
      />
      {errorText?<p className="text-red-500 py-0 px-2 mt-2 mx-0 align-left text-sm">{errorText}</p>:null}
    </>
  )
}

export default TextInput