import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Messages from './messages/Messages'
import Inputs from './inputs/Inputs'
import Navbar from './navbar/Navbar'

const Chat = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Messages/>
      <Inputs/>
    </>
  )
}

export default Chat