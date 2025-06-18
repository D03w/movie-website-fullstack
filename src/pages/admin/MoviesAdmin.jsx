import { Plus, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AutoTable from '../../components/Auto/AutoTable'
import { movieTableBody } from '../../utils/TableBody'
import { MoviesTableHead } from '../../utils/TableHead'
import CreateMovie from '../../components/modal/CreateMovie'
import { AutoGet } from '../../config/AppService/AppService'
import { APP_API } from '../../config/BaseConfig'

export default function MoviesAdmin() {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [id, setId] = useState(null)
    const [genres, setGenres] = useState(null)
    const typesMovie = [
        {
            name: "Kino",
            value: "movie"
        },
        {
            name: "Serial",
            value: "series"
        },
        {
            name: "Anime",
            value: "anime"
        },
        {
            name: "Anime serial",
            value: "animeSeries"
        },
    ]

    const getGenre = async () => {
        const res = await AutoGet(APP_API.genre)

        setGenres(res.data)
    }

    const form = [
        {
            name: "title",
            label: "Film nomi",
            type: "text"
        },
        {
            name: "description",
            label: "Izoh",
            type: "text"
        },
        {
            name: "photo",
            label: "Film Rasmi",
            type: "file"
        },
        {
            name: "genre",
            label: "Janr",
            type: "select",
            arr: genres
        },
        {
            name: "movieType",
            label: "Film turi",
            type: "select",
            arr: typesMovie
        },
        {
            name: "year",
            label: "Yili",
            type: "text"
        },
        {
            name: "trailer",
            label: "Treyler",
            type: "file"
        }
    ]

    const getData = async () => {
        const res = await AutoGet(`${APP_API.genre}/one/${id}`)
        setFormData({ name: res.data.name, photo: res.data.photo })

    }

    useEffect(() => {
        getGenre()
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
                    <button className='bg-green-600 p-2 rounded flex items-center cursor-pointer hover:bg-green-700' onClick={() => setOpen(true)}>Qo'shish <Plus /></button>
                </div>
            </div>
            <AutoTable head={MoviesTableHead} tableBody={movieTableBody} />
        </div>
    )
}
