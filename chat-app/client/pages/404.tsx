import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const NoutFound = () => {
    const router = useRouter()
    const [timer,setTimer] = useState(5)
    const func = () => alert('before going to home')
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 5000);
        const timerInterval = setInterval(()=>{
                                setTimer(timer - 1)
                                console.log(timer);
                            },1000)
        return func
                            // clearInterval(timerInterval)
    },[router,timer])
        
  return (
    <div className='text-center my-10 mx-auto pt-20 w-80 h-80 shadow-gray-500 shadow-xl rounded-2xl'>
        <h1 className='text-red-600 font-bold'>Page not found.</h1>
        <Link href='/' className='bg-blue-400 rounded-3xl p-2 hover:text-white hover:bg-blue-600 my-10 mx-auto transition-colors duration-500 block w-40'>
            Homepage
        </Link>
        <p>Redirecting to home page ... {timer}</p>
    </div>
  )
}

export default NoutFound