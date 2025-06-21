import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AutoGet } from '../../config/AppService/AppService'
import { APP_API } from '../../config/BaseConfig'

export default function OneMovie() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        const res = await AutoGet(`${APP_API.movie}/one/${id}`)

        setMovie(res.data)
    }

    useEffect(() => {
        getMovie()
    }, [])

    console.log(movie)

  return (
    <div className='w-full'>
        <div className='w-full'>
            <div className='absolute w-full'>
                <div className='bg-linear-to-l from-gray-950/25 to-gray-950 absolute w-full h-full'></div>
                <video src={movie.trailer} autoPlay muted loop className='w-full h-[85vh] object-cover absolute z-30'></video>
            </div>
            <div className='z-50 w-full h-full pt-30'>
                <h1 className='text-white z-50'>sakjsnjkasnjkanskjnakjsnjkansjknakjs</h1>
            </div>
        </div>
    </div>
  )
}