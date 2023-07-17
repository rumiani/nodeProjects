import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const limit:number = +process.env.NEXT_PUBLIC_TEXT_LIMIT!

const Bar = () => {
    const{inputText} = useSelector(state => state.appState)

    const[barProgress, setBarProgress] = useState(0)
    const[barColor, setBarColor] = useState('green')
    const width = (inputText.length * 100) /limit
    
    useEffect(() =>{
        setBarColor('green')
        setBarProgress(0)
        if(width <= 100) setBarProgress(width)
        if(width >= 90)setBarColor('yellow')        
        if(width > 100){
            setBarColor('red') 
            setBarProgress(100)
        }
    },[width])

  return (
    <div id="chat_bar" className=' bg-red-700 h-1 w-10'
    style={{background:barColor, width:barProgress + "%"}}
    ></div>
  )
}

export default Bar