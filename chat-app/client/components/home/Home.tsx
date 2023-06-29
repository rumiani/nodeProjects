import React from 'react'
import LoginFooter from './joinFooter/joinFooter'
import JoinHeader from './joinHeader/JoinHeader'
import Form from './lobby/Form'
import Login from './login/Login'

function Landing() {
  return (
    <div className="max-w-5xl text-center animate-fallDown">
        <JoinHeader/>
        <Login/>
        {/* <Form/> */}
        <LoginFooter/>
    </div>
  )
}

export default Landing