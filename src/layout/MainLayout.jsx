import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/main/Navbar'
import Footer from '../components/main/Footer'

export default function MainLayout() {
  return (
    <div className='bg-gray-950 h-[100vh] overflow-auto text-white'>
        <Navbar/>   
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}
