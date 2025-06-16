import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AutoTable from '../../components/Auto/AutoTable'
import { UsersTableHead } from '../../utils/TableHead'
import { AutoGet } from '../../config/AppService/AppService'
import { APP_API } from '../../config/BaseConfig'
import { userTableBody } from '../../utils/TableBody'

export default function Users() {
    const [users, setUsers] = useState(null)
    const Read = () => {
        console.log(1)
    }

    const deleteItem = () => {
        console.log(2)
    }

    const getAll = async () => {
        const res = await AutoGet(`${APP_API.users}`)

        if(res.success){
            setUsers(res.data)
        }
    }

    useEffect(() => {
        getAll()
    }, [])
  return (
    <div>
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
        </div>
        <div>
            <AutoTable
                read={Read}
                head={UsersTableHead}
                allData={users}
                tableBody={userTableBody}
            />
        </div>
    </div>
  )
}
