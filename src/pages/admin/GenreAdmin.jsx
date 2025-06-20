import { Plus, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AutoTable from '../../components/Auto/AutoTable'
import { genreTableBody, movieTableBody } from '../../utils/TableBody'
import { GenreTableHead, MoviesTableHead } from '../../utils/TableHead'
import CreateMovie from '../../components/modal/CreateMovie'
import { AutoDelete, AutoGet, AutoPost, AutoUpdate } from '../../config/AppService/AppService'
import { APP_API } from '../../config/BaseConfig'
import { toast } from 'react-toastify'

export default function GenreAdmin() {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [id, setId] = useState(null)

    const form = [
        {
            name: "name",
            label: "Janr nomi",
            type: "text"
        },
        {
            name: "photo",
            label: "Rasm",
            type: "file"
        }
    ]

    const getData = async () => {
        const res = await AutoGet(`${APP_API.genre}/one/${id}`)
        setFormData({ name: res.data.name, photo: res.data.photo })

    }

    useEffect(() => {
        if (id) {
            getData()
        }
    }, [id])

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const createGenre = async () => {
        const data = new FormData()

        data.append("name", formData.name)
        data.append("photo", formData.photo)

        const res = await AutoPost(APP_API.genre, data)
        getAll()

        if (res.data.success) {
            return toast.success(res.message)
        }

        toast.error(res.data.message)
    }

    const deleteGenre = async (id) => {
        const res = await AutoDelete(APP_API.genre, id)

        if (res.data.success) {
            getAll()
            return toast.success(res.data.message)
        }

        toast.error(res.data.message)
    }

    const getAll = async () => {
        const res = await AutoGet(APP_API.genre)

        setAllData(res.data)
    }

    useEffect(() => {
        getAll()
    }, [])

    const updateGenre = async () => {

        const data = new FormData()
        data.append("name", formData.name)
        data.append("photo", formData.photo)

        const res = await AutoUpdate(APP_API.genre, id, data)
        setId(null)
        setFormData(null)
        getAll()

        if (res.data.success) {
            return toast.success(res.data.message)
        }

        toast.error(res.data.message)
    }

    const clickUpdate = (id) => {
        setId(id)
        setOpen(true)
    }

    return (
        <div>
            {open && <CreateMovie open={open} setOpen={setOpen} form={form} handleChange={handleChange} formData={formData} create={createGenre} id={id} update={updateGenre} />}
            <div className='flex items-center justify-between'>
                <div className="flex items-center">
                    <select className='border border-red-500 p-2 rounded bg-gray-950 outline-none'>
                        <option value="">Filtrlash</option>
                        <option value="">Oxiridan</option>
                    </select>
                    <label className='flex ms-2 items-center border border-red-500 p-2 rounded'>
                        <input type="text" placeholder='Search...' className='outline-none' />
                        <Search />
                    </label>
                </div>
                <div>
                    <button className='bg-green-600 p-2 rounded flex items-center cursor-pointer hover:bg-green-700' onClick={() => {
                        setOpen(true)
                        setFormData(null)
                    }}>Qo'shish <Plus /></button>
                </div>
            </div>
            <AutoTable deleteItem={deleteGenre} update={clickUpdate} head={GenreTableHead} allData={allData} tableBody={genreTableBody} trailer={false}/>
        </div>
    )
}
