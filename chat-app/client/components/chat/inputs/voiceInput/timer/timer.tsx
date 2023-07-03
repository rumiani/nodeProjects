import { useEffect, useState } from "react";

let time = 0
let sec;
let min;
let tenthSec;
let timerInterval:  number | NodeJS.Timer ; 
export const Timer = () =>{
    const[timer,setTimer] = useState('00:00')

    useEffect(() =>{
        timerInterval = setInterval(() =>{
            tenthSec = String(Math.floor(time % 10 )).padStart(2, '0')
            sec = String(Math.floor(time / 10) % 60).padStart(2, '0')
            min = String(Math.floor(time / 600) % 60).padStart(2, '0')
            setTimer(`${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')},${String(tenthSec).padStart(2, '0')}`)
            time++
        }, 100);
        
        return function finish () :void {
            clearInterval(timerInterval); 
            time = 0
            setTimer('00:00'); 
        }
    },[])

    return(
    <span id="voiceLength" className='w-full p-1 text-center'>{timer}</span>
    )
}