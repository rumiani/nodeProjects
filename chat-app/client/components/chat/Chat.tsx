import React from 'react'
import Messages from './messages/Messages'
import Inputs from './inputs/inputs'
import Dashboard from './dashboard/dashboard'

const Chat = () => {
  return (
    <>
      <Dashboard/>
      <Messages/>
      <Inputs/>
    </>
  )
}

export default Chat