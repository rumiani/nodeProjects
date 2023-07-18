import React, { useEffect, useState } from 'react'
import Form from './Form'
import Logout from '../general/logout/logout'
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { userLoggedInReducer } from '@/redux/appStateSlice'
import Spinner from '../general/spinner/spinner'

const Lobby = () => {
  const[session, setSession] = useLocalStorage('userSession', null)
  const{user} = useSelector(state => state.appState)

    const dispatch = useDispatch()
    const router = useRouter()
    const[joined, setJoined] = useState(false)
  useEffect(()=>{    
    if(session){
      dispatch(userLoggedInReducer(true))
    }if(!session){
      dispatch(userLoggedInReducer(false))
      router.push('/login')
    }else{
    }
    // connectToServer()
  }, [user, router, dispatch,session]);
  return (
    <>
    {user.loggedIn?
      <div>
        <Form/>
        <Create createHandler={createHandler}/>

        <Logout logout={()=>setSession(null)}/>
      </div>:
      <Spinner size={100}/>
    }
    </>
  )
}

export default Lobby