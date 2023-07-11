import React, { useState } from 'react'
import Users from './users/users'
import Navbar from './navbar/navbar'

const Dashboard = () => {
  const[dashboard, setDashboard] = useState(false)
  const showDashboardHandler = ()=>{    
    setDashboard(!dashboard)
  }
  return (
    <div className={`md:w-3/4 w-full ${dashboard&& 'h-screen'} fixed top-0 max-w-xl z-10 flex justify-between flex-col my-0 mx-auto md:rounded-b-lg shadow-gray-200 shadow-md`}>
      <Navbar showDashboardHandler={showDashboardHandler} dashboard={dashboard}/>
      {dashboard &&<Users/>}
    </div>
  )
}
export default Dashboard