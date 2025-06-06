import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/admin/Navbar'
import { getMeAdmin } from '../config/AuthService/authService'

export default function AndminDashboardLayout() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getMeAdmin(setUser, navigate)
  }, [])
  return (
    <div className="h-[100vh] bg-gray-950 text-white w-full">
      <Navbar/>
      <div className='pt-35 pl-10 w-full pr-10'>
        <Outlet/>
      </div>
    </div>
  )
}
