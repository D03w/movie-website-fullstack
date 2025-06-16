import { Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
import AutoTable from '../../components/Auto/AutoTable'
import { movieTableBody } from '../../utils/TableBody'
import { MoviesTableHead } from '../../utils/TableHead'
import CreateMovie from '../../components/modal/CreateMovie'

export default function MoviesAdmin() {
    const [open, setOpen] = useState(false)
  return (
    <div>
        {open && <CreateMovie open={open} setOpen={setOpen}/>}
        <div className='flex items-center justify-between'>
            <div className="flex items-center">
                <select className='border border-red-500 p-2 rounded bg-gray-950 outline-none'>
                    <option value="">Filtrlash</option>
                    <option value="">Oxiridan</option>
                </select>
                <label className='flex ms-2 items-center border border-red-500 p-2 rounded'>
                    <input type="text" placeholder='Search...' className='outline-none'/>
                    <Search/>
                </label>
            </div>
            <div>
                <button className='bg-green-600 p-2 rounded flex items-center cursor-pointer hover:bg-green-700' onClick={() => setOpen(true)}>Qo'shish <Plus/></button>
            </div>
        </div>
        <AutoTable head={MoviesTableHead} tableBody={movieTableBody}/>
    </div>
  )
}
