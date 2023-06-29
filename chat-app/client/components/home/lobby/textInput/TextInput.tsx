import React, { LegacyRef, useState } from 'react'
import { infoValitaor } from '../infoValidator'

interface InputObj{
    id:string,
    value:string,
    name:string,
    placeHolder:string, 
    element:LegacyRef<HTMLInputElement>,
}

const TextInput = ({id, value, name, placeHolder,element}:InputObj) => {
  const[currentValue, setCurrentValue] = useState(value)
  const[errorText, setErrorText]:any = useState(null)

  const changeHandler = (e: { target: { value: string } }) => {
    setCurrentValue(e.target.value)
    const error = infoValitaor(e.target.value)?.error
    if(error){
      setErrorText(error)
    }else{
      setErrorText(null)
    }
  }
  
  return (
    <>
      <span className="text-red-500 w-fit relative top-10 right-2 text-lg">*</span>
      <input 
        className="border-none py-0 px-2 rounded-lg my-0 mx-2 h-10 overflow-y-auto bg-white shadow-lg transition-shadow duration-1000" 
        onChange={changeHandler}
        id={id} 
        name={name} 
        value={currentValue}
        placeholder={placeHolder}
        ref={element}
        autoComplete="off" 
        required 
      />
      {errorText?<p className="text-red-500 py-0 px-2 mt-2 mx-0 align-left text-sm">{errorText}</p>:null}
    </>
  )
}

export default TextInput