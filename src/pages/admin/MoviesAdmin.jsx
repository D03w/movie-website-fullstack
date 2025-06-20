import { Plus, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AutoTable from '../../components/Auto/AutoTable'
import { movieTableBody } from '../../utils/TableBody'
import { MoviesTableHead } from '../../utils/TableHead'
import CreateMovie from '../../components/modal/CreateMovie'
import { AutoDelete, AutoGet, AutoPost } from '../../config/AppService/AppService'
import { APP_API } from '../../config/BaseConfig'
import { toast } from 'react-toastify'
import TrailerModal from '../../components/admin/TrailerModal'

export default function MoviesAdmin() {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [id, setId] = useState(null)
    const [genres, setGenres] = useState(null)
    const [show, setShow] = useState(false)
    const [trailer, setTrailer] = useState(null)
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
        {
            name: "Serial yaratish",
            value: "createSeries"
        }
    ]

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
        },
        {
            name: "series",
            label: "Qaysi serial davomi",
            type: "select"
        },
        {
            name: "season",
            label: "Serial faslini kiriting",
            type: "number"
        }
    ]
    const getGenre = async () => {
        const res = await AutoGet(APP_API.genre)

        setGenres(res.data)
    }

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

    const createMovie = async () => {
        const data = new FormData()

        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("photo", formData.photo);
        data.append("genre", formData.genre);
        data.append("movieType", formData.movieType);

        if (formData.movieType === "series" && formData.series) {
            data.append("series", formData.series);
        }

        if (formData.movieType === "series" && formData.season !== "") {
            data.append("season", formData.season);
        }

        data.append("year", formData.year);
        data.append("trailer", formData.trailer);

        const res = await AutoPost(APP_API.movie, data)
        getAll()

        if (res.data.success) {
            setFormData({})
            return toast.success(res.message)
        }

        toast.error(res.data.message)
    }

    const deleteMovie = async (id) => {
        const res = await AutoDelete(APP_API.genre, id)

        if (res.data.success) {
            getAll()
            return toast.success(res.data.message)
        }

        toast.error(res.data.message)
    }

    const getAll = async () => {
        const res = await AutoGet(APP_API.movie)

        setAllData(res.data)
    }

    useEffect(() => {
        getAll()
    }, [])

    const updateMovie = async () => {

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

    const handleShow = (trailer) => {
        setTrailer(trailer)
        setShow(true)
    }
    return (
        <div>
            {show && <TrailerModal trailer={trailer} setShow={setShow}/>}
            {open && <CreateMovie open={open} setOpen={setOpen} form={form} handleChange={handleChange} formData={formData} create={createMovie} id={id} update={updateMovie} />}
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
            <AutoTable head={MoviesTableHead} allData={allData} tableBody={movieTableBody} trailer={true} handleShow={handleShow}/>
        </div>
    )
}
