import { useState } from "react";

export const timerHandler = (status) =>{
console.log('timer working ...');

    let time = 0
    let timerInterval; 
    let seconds = 0;
    let minutes = 0;
    let tenthSeconds = 0

    
    
    const updateTimer = () => {
        let preMiliSec
        let preSec
        let preMin

        time++

        tenthSeconds = Math.floor(time % 10 );
        seconds = Math.floor(time / 10) % 60;
        minutes = Math.floor(time / 60) % 60;

        if (seconds < 10) preSec = '0'
        if (minutes < 10) preMin = '0'
        if (tenthSeconds < 10) preMiliSec = '0'

        return preMin + minutes + ':' + preSec + seconds + ',' + preMiliSec + tenthSeconds
    }
    
        
    if(status === 'start') () => {
        timerInterval = setInterval(updateTimer, 100);
      }
      if(status === 'stop' || time > 36000) () => {
            clearInterval(timerInterval); 
            return ('00:00');
      }
}