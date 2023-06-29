import React from 'react'
import LoginFooter from './joinFooter/joinFooter'
import JoinHeader from './joinHeader/JoinHeader'
import Form from './form/Form'

function HomeComps() {
  return (
    <div className="max-w-5xl text-center animate-fallDown">
        <JoinHeader/>
        <Form/>
        <LoginFooter/>
    </div>
  )
}

export default HomeComps