import React, { useEffect, useState } from 'react'

const Bar = () => {
    const[barProgress, setBarProgress] = useState(0)
    const[barColor, setBarColor] = useState('green')
    const input = `Hi, Isf sdfd sfds fs fs dfds s fsf sf df dfd'm maziassff sdf dsf  fds fds f sf s f sdf sdfsd df dsf dsf ds fds r lurom.`
    const limit = 100
    const width = (input.length * 100) /limit
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
    <div id="chat_bar" className='absolute bottom-0 h-1 w-10'
    style={{background:barColor, width:barProgress + "%"}}></div>
  )
}

export default Bar