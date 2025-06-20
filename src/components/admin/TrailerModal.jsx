import { X } from 'lucide-react'
import React from 'react'

export default function TrailerModal({trailer, setShow}) {
  return (
    <div className='bg-white/50 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-[100vh]'>
        <div className="p-4 bg-gray-950 rounded">
            <div className="flex items-center justify-between">
                <h1>{trailer.title}</h1>
                <X onClick={() => setShow(false)} className='cursor-pointer'/>
            </div>
            <div className='mt-4'>
                <video src={trailer.trailer} autoPlay className='w-200 rounded object-cover'></video>
            </div>
        </div>
    </div>
  )
}
