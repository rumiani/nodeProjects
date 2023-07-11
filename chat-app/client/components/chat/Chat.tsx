import React from 'react'
import Messages from './messages/Messages'
import Inputs from './inputs/inputs'
import Dashboard from './dashboard/dashboard'
import UserPreview from './userPreview/userPreview'

const Chat = () => {

  return (
    <>
      <UserPreview/>
      <Dashboard/>
      <Messages/>
      <Inputs/>
    </>
  )
}

export default Chat