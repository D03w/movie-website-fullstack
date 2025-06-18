import React, { useEffect, useState } from 'react'
import { AutoGet } from '../config/AppService/AppService'
import { APP_API } from '../config/BaseConfig'

export default function Genres() {
    const [genre, setGenre] = useState(null)
    const getAll = async () => {
        const res = await AutoGet(APP_API.genre)

        setGenre(res.data)
    }

    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className='flex items-center justify-center mt-20'>
            <div className="flex items-center justify-center gap-3">
                {
                    genre?.map(item => (
                        <div className='flex flex-col items-center cursor-pointer group'>
                            <div className='w-20 h-20 overflow-hidden rounded-full group-hover:border-3 group-hover:border-red-600/50'>
                                <img className='w-20 h-20 object-cover' src={item.photo} alt="" />
                            </div>
                            <small className='mt-2'>{item.name}</small>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
