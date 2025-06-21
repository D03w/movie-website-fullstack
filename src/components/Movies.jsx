import React, { useEffect, useState } from 'react'
import { AutoGet } from '../config/AppService/AppService'
import { APP_API } from '../config/BaseConfig'
import { Link } from 'react-router-dom'

export default function Movies() {
    const [movies, setMovies] = useState(null)

    const getAll = async () => {
        const res = await AutoGet(APP_API.movie)

        setMovies(res.data)
    }

    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className='p-4 mt-10'>
            <div className='border-l-3 border-red-600/50'>
                <h1 className='ms-3 text-[25px] cursor-pointer'>Kinolar</h1>
            </div>
            <div className='items-center justify-center grid grid-cols-4 gap-4 mt-7'>
                {
                    movies?.map(item => (
                        <Link to={`/one-movie/${item._id}`}>
                            <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={item.photo}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                                    />
                                    <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                                        ⭐ {item.like}
                                    </div>
                                </div>
                                <div className="p-4 space-y-1">
                                    <h3 className="text-lg font-semibold truncate">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.genre.name}</p>
                                </div>
                            </div>
                        </Link>

                    ))
                }
            </div>
            <div className="flex mt-7 justify-center w-full">
                <button className='p-2 rounded-lg bg-red-600/25 cursor-pointer hover:bg-red-600'>Yana Ko'rsatish</button>
            </div>
        </div>
    )
}
