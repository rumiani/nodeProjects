import React, { useEffect, useState } from 'react'
import Form from './Form'
import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { userLoggedInReducer } from '@/redux/appStateSlice'
import Logout from '../generalCom/logout/logout'
import Create from './create/create'
import Spinner from '../generalCom/spinner/spinner'
import Rooms from './roomsList/Rooms'

const HomePage = () => {
  const[session, setSession] = useLocalStorage('userSession', null)
  const{user} = useSelector(state => state.appState)

    const dispatch = useDispatch()
    const router = useRouter()
    const[joined, setJoined] = useState(false)
  useEffect(()=>{            
    if(session){
      console.log('s');
      
      dispatch(userLoggedInReducer(true))
    }else{
      
      dispatch(userLoggedInReducer(false))
      router.push('/login')
    }
    // connectToServer()
  }, [user, router, dispatch,session]);

  const logoutHandler = ()=>{
    if(confirm('Are you sure you want to log out?'))
     setSession(null)
  }
  return (
    <>
    {user.loggedIn?
      <div className='w-full sm:w-1/2 max-w-md'>
        <Form/>
        <Rooms/>
        <Logout logoutHandler={logoutHandler}/>
      </div>:
      <Spinner size={100}/>
    }
    </>
  )
}

export default HomePage