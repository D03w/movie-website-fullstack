import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/admin/Navbar'

export default function AndminDashboardLayout() {
  return (
    <div className="h-[100vh] bg-gray-950 text-white w-full">
      <Navbar/>
      <div className='pt-35 pl-10 w-full pr-10'>
        <Outlet/>
      </div>
    </div>
  )
}
