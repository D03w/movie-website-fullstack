import { AlignStartVertical, Bell, BookOpen, MessageCircleMore, Popcorn, ShieldUser, TvMinimalPlay, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const nav = [
        {
            name: "Main",
            link: "/",
            icon: <BookOpen className='text-red-600' size={19} />
        },
        {
            name: "Dashboard",
            link: "/admin",
            icon: <AlignStartVertical className='text-red-600' size={19} />
        },
        {
            name: "Users",
            link: "/admin/users",
            icon: <User className='text-red-600' size={19} />
        },
        {
            name: "Admins",
            link: "/admin/admins",
            icon: <ShieldUser className='text-red-600' size={19} />
        },
        {
            name: "Movie",
            link: "/admin/movies",
            icon: <Popcorn className='text-red-600' size={19} />
        },
        {
            name: "Genre",
            link: "/admin/genre",
            icon: <TvMinimalPlay className='text-red-600' size={19} />
        },
        {
            name: "Comments",
            link: "/admin/admins",
            icon: <MessageCircleMore className='text-red-600' size={19} />
        },
        {
            name: "Notification",
            link: "/admin/admins",
            icon: <Bell className='text-red-600' size={19} />
        },
    ]
    return (
        <div className='fixed flex justify-center w-full p-6 text-white AdminDashboard'>
            <div className="bg-gray-900/50 p-2 rounded w-full grid md:grid-cols-8 sm:grid-cols-5 grid-cols-3 gap-2 h-[70px] overflow-hidden items-center justify-center border border-gray-800">
                {
                    nav.map(item => (
                        <NavLink to={item.link} className='bg-red-400/50 p-2 rounded flex flex-col border border-red-400 items-center w-14 group relative hover:shadow-lg hover:shadow-red-400 hover:bg-red-400 transition duration-300'>
                            <span>{item.icon}</span>
                            <p className='truncate text-[12px] w-full text-center'><small>{item.name}</small></p>
                            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 z-10">
                                {item.name}
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}
