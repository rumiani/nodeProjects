import { Inter } from 'next/font/google'
import Head from 'next/head'
import Landing from '@/components/home/Home'
import Chat from '@/components/chat/Chat'
import { useEffect } from 'react'
import { connectToServer } from './api/io/io'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    connectToServer()
  }, []);
  
  return (
    <>
    <Head>
        <link rel="icon" href="/assets/favicon.ico" /> 
        <title>Chatrum | Login</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="chatrum, chat, text, messenger, chatroom" />
        <meta name="description" content="Chat with your friends." />
      </Head>
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      {/* <Chat/> */}
      <Landing/>
    </main>
    </>

  )
}
