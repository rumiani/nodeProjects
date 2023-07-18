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

const HomePage = () => {
  const[session, setSession] = useLocalStorage('userSession', null)
  const{user} = useSelector(state => state.appState)

    const dispatch = useDispatch()
    const router = useRouter()
    const[joined, setJoined] = useState(false)
  useEffect(()=>{     
    console.log(session);
       
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
      <div className='w-full sm:w-1/2 max-w-md'>
        <Form/>
        <Create/>
        <Logout logout={()=>setSession(null)}/>
      </div>:
      <Spinner size={100}/>
    }
    </>
  )
}

export default HomePage