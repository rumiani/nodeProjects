import { Inter } from 'next/font/google'
import Head from 'next/head'
import Landing from '@/components/home/Home'
import Chat from '@/components/chat/Chat'
import { useEffect } from 'react'
import io from 'socket.io-client';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('client');
  
  // useEffect(() => {
  //   // const socket = io(); // Connect to the same origin
  //   const socket = io('http://localhost:8000');
  
  //   // Event handlers
  //   socket.on('connect', () => {
  //     console.log('Connected to server');
  //   });
  
  //   socket.on('message', (data) => {
  //     console.log('Received message:', data);
  //   });
  
  //   return () => {
  //     socket.disconnect(); // Disconnect when the component unmounts
  //   };
  // }, []);
  
  return (
    <>
    <Head>
        <link rel="icon" href="/assets/favicon.ico" /> 
        <title>Chatrum | Login</title>
      </Head>
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Chat/>
      {/* <Landing/> */}
    </main>
    </>

  )
}
