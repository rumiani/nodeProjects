import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { connectToServer } from './api/io/io'
import Room from '@/components/chat/Chat'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Spinner from '@/components/general/spinner/spinner'
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage'
import { useDispatch } from 'react-redux'
import { userLoggedInReducer } from '@/redux/appStateSlice'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const[session, setSession] = useLocalStorage('userSession', null)
    const{user} = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const router = useRouter()
    const[joined, setJoined] = useState(false)

  useEffect(()=>{    
    if(session && !user.loggedIn){
      console.log('session exist');
      // dispatch(userLoggedInReducer(true))
    }else{
      // router.push('/login')
      console.log('no session');

      console.log('user.loggedIn',user.loggedIn);
    }
    // connectToServer()
    
  }, [user, router, dispatch,session]);
  
  return (
    <>
    <Head>
        <link rel="icon" href="/assets/favicon.ico" /> 
        <title>Chatrum | Login</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="chatrum, chat, text, messenger, chatroom" />
        <meta name="description" content="Chat with your friends." />
      </Head>
    <main className={`flex h-screen justify-center align-middle items-center ${inter.className}`}>
      {user.loggedIn? <Home/>: <Spinner size={100}/>}
    </main>
    </>
  )
}
