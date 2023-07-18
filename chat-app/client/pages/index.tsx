import { Inter } from 'next/font/google'
import Head from 'next/head'
import Lobby from '@/components/lobby/lobby'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <Lobby/>
    </main>
    </>
  )
}
