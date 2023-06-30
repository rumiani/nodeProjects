import React from 'react'
import JoinHeader from './joinHeader/JoinHeader'
import Form from './lobby/Form'
import JoinFooter from './joinFooter/joinFooter'
import Google from './google'

function Landing() {

  return (
    <div className="max-w-5xl text-center animate-fallDown">
        <JoinHeader/>
        {/* <Form/> */}

        <Google/>
        <JoinFooter/>
    </div>
  )
}

export default Landing