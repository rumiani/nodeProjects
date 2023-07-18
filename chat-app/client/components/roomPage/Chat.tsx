import React from 'react'
import Messages from './messages/Messages'
import Inputs from './inputs/inputs'
import Dashboard from './dashboard/dashboard'
import UserPreview from './userPreview/userPreview'

const Room = () => {

  return (
    <>
      <UserPreview/>
      <Dashboard/>
      <Messages/>
      <Inputs/>
    </>
  )
}

export default Room